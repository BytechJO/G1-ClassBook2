import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit6_Page2_Q2.css";

// 🔹 الصور
import img1 from "../../../assets/unit6/imgs/hill.svg";
import img2 from "../../../assets/unit6/imgs/dig.svg";
import img3 from "../../../assets/unit6/imgs/mitt.svg";
import img4 from "../../../assets/unit6/imgs/wig.svg";

/* ================= DATA ================= */

const leftParts = [
  { id: 1, text: "He can’t" },
  { id: 2, text: "He can’t" },
  { id: 3, text: "It can’t" },
  { id: 4, text: "I can" },
];

const images = [
  { id: "img1", src: img1 },
  { id: "img2", src: img2 },
  { id: "img3", src: img3 },
  { id: "img4", src: img4 },
];

const rightParts = [
  { id: "r1", text: "sail a boat." },
  { id: "r2", text: "climb a tree." },
  { id: "r3", text: "swim." },
  { id: "r4", text: "ride a bike." },
];

const correctMatches = [
  { left: "He can’t", right: "ride a bike.", image: "img3" },
  { left: "He can’t", right: "sail a boat.", image: "img4" },
  { left: "It can’t", right: "climb a tree.", image: "img2" },
  { left: "I can", right: "swim.", image: "img1" },
];

const correctSentences = {
  1: "He can’t ride a bike.",
  2: "It can’t climb a tree.",
  3: "He can’t sail a boat.",
  4: "I can swim.",
};

/* ================= COMPONENT ================= */

const WB_Unit6_Page2_Q2 = () => {
  const containerRef = useRef(null);

  const [lines, setLines] = useState([]);
  const [firstPoint, setFirstPoint] = useState(null);
  const [wrongLeft, setWrongLeft] = useState([]);
  const [written, setWritten] = useState({});
  const [locked, setLocked] = useState(false);
  const [checked, setChecked] = useState(false);

  /* ================= HELPERS ================= */

  const getCenter = (el) => {
    const rect = containerRef.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return {
      x: r.left - rect.left + r.width / 2,
      y: r.top - rect.top + r.height / 2,
    };
  };
const getDotCenterFromParent = (parent) => {
  const dot = parent.querySelector(".dot-wb-unit6-p2-q2");
  if (!dot) return null;
  return getCenter(dot);
};

  /* ================= CLICK HANDLERS ================= */

 const handleStart = (e) => {
  if (locked) return;

  const data = e.currentTarget.dataset;
  const pos = getDotCenterFromParent(e.currentTarget);
  if (!pos) return;

  setFirstPoint({
    left: data.left || null,
    image: data.image || null,
    x: pos.x,
    y: pos.y,
  });
};

 const handleEnd = (e) => {
  if (!firstPoint || locked) return;

  const data = e.currentTarget.dataset;
  const pos = getDotCenterFromParent(e.currentTarget);
  if (!pos) return;

  const newLine = {
    x1: firstPoint.x,
    y1: firstPoint.y,
    x2: pos.x,
    y2: pos.y,
    left: firstPoint.left,
    image: firstPoint.image || data.image,
    right: data.right || null,
  };

  setLines((prev) => [...prev, newLine]);

  // 👇 لو وصلنا left → image نكمّل image → right
  if (firstPoint.left && data.image) {
    setFirstPoint({
      image: data.image,
      x: pos.x,
      y: pos.y,
    });
  } else {
    setFirstPoint(null);
  }
};


  /* ================= CHECK ================= */

  const checkAnswers = () => {
    if (lines.length < correctMatches.length * 2) {
      ValidationAlert.info(
        "Pay attention!",
        "Please connect all the pairs before checking."
      );
      return;
    }

    let score = 0;
    let wrong = [];

    correctMatches.forEach((c) => {
      const hasLeftToImage = lines.some(
        (l) => l.left === c.left && l.image === c.image
      );
      const hasImageToRight = lines.some(
        (l) => l.image === c.image && l.right === c.right
      );

      if (hasLeftToImage && hasImageToRight) score++;
      else wrong.push(c.left);
    });

    Object.entries(correctSentences).forEach(([id, text]) => {
      if (written[id]?.trim().toLowerCase() === text.toLowerCase()) {
        score++;
      }
    });

    setWrongLeft(wrong);
    setChecked(true);
    setLocked(true);

    const total = correctMatches.length + Object.keys(correctSentences).length;
    const color =
      score === total ? "green" : score === 0 ? "red" : "orange";

    ValidationAlert[
      score === total ? "success" : score === 0 ? "error" : "warning"
    ](
      `<div style="font-size:20px;text-align:center;color:${color}">
        <b>Score: ${score} / ${total}</b>
      </div>`
    );
  };

  /* ================= SHOW ANSWER ================= */

  const showAnswer = () => {
    const finalLines = [];

    correctMatches.forEach((c) => {
      const leftEl = document.querySelector(`[data-left="${c.left}"]`);
      const imgEl = document.querySelector(`[data-image="${c.image}"]`);
      const rightEl = document.querySelector(`[data-right="${c.right}"]`);

      if (!leftEl || !imgEl || !rightEl) return;

      const leftPos = getCenter(leftEl);
      const imgPos = getCenter(imgEl);
      const rightPos = getCenter(rightEl);

      finalLines.push({
        x1: leftPos.x,
        y1: leftPos.y,
        x2: imgPos.x,
        y2: imgPos.y,
      });

      finalLines.push({
        x1: imgPos.x,
        y1: imgPos.y,
        x2: rightPos.x,
        y2: rightPos.y,
      });
    });

    setLines(finalLines);
    setWritten(correctSentences);
    setLocked(true);
    setChecked(true);
  };

  /* ================= RESET ================= */

  const reset = () => {
    setLines([]);
    setWritten({});
    setWrongLeft([]);
    setLocked(false);
    setChecked(false);
    setFirstPoint(null);
  };

  /* ================= RENDER ================= */

  return (
    <div className="wb-unit6-p2-q2-wrapper">
      <h4 className="header-title-page8">
        <span className="ex-A">D</span> Read, match, and write.
      </h4>

      <div className="matching-area" ref={containerRef}>
        {/* LEFT */}
        <div className="left-col-wb-unit6-p2-q2">
          {leftParts.map((l, i) => (
            <div
              key={i}
              className="item-wb-unit6-p2-q2 clickable"
              data-left={l.text}
              onClick={handleStart}
            >
              <span className="num-wb-unit6-p2-q2">{i + 1}</span>
              <span>{l.text}</span>
              <div className="dot-wb-unit6-p2-q2 start-dot" />
              {wrongLeft.includes(l.text) && checked && (
                <span className="wrong-mark-wb-unit6-p2-q2">✕</span>
              )}
            </div>
          ))}
        </div>

        {/* IMAGES */}
        <div className="mid-col-wb-unit6-p2-q2">
          {images.map((img) => (
            <div
              key={img.id}
              className="item-wb-unit6-p2-q2 clickable"
              data-image={img.id}
              onClick={(e) =>
                firstPoint ? handleEnd(e) : handleStart(e)
              }
            >
              <div className="dot-wb-unit6-p2-q2 end-dot" />
              <img src={img.src} alt="" />
              
              <div className="dot-wb-unit6-p2-q2 start-dot" />
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="right-col-wb-unit6-p2-q2">
          {rightParts.map((r) => (
            <div
              key={r.id}
              className="item-wb-unit6-p2-q2 clickable"
              data-right={r.text}
              onClick={handleEnd}
            >
              <div className="dot-wb-unit6-p2-q2 end-dot" />
              <span>{r.text}</span>
            </div>
          ))}
        </div>

        {/* LINES */}
        <svg className="lines-layer">
          {lines.map((l, i) => (
            <line key={i} {...l} stroke="red" strokeWidth="3" />
          ))}
        </svg>
      </div>

      {/* WRITE SECTION */}
      <div className="write-section-wb-unit6-p2-q2">
        {Object.keys(correctSentences).map((id) => (
          <div key={id} className="write-line-wb-unit6-p2-q2">
            <span>{id}</span>
            <input
              value={written[id] || ""}
              disabled={locked}
              onChange={(e) =>
                setWritten({ ...written, [id]: e.target.value })
              }
            />
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="action-buttons-container">
        <button onClick={reset} className="try-again-button">
          Start Again ↻
        </button>
        <button onClick={showAnswer} className="show-answer-btn">
          Show Answer
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default WB_Unit6_Page2_Q2;
