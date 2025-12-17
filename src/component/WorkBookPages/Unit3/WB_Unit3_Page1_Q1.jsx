import React, { useState, useRef } from "react";
import img1 from "../../../assets/img_unit2/imgs/morning.jpg";
import img2 from "../../../assets/img_unit2/imgs/hey.jpg";
import img3 from "../../../assets/img_unit2/imgs/bey.jpg";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit3_Page1_Q1.css";

const WB_Unit3_Page1_Q1 = () => {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  let startPoint = null;
  const [wrongImages, setWrongImages] = useState([]);
  // ⭐⭐ NEW: قفل الرسم بعد Check Answer
  const [locked, setLocked] = useState(false); //  ← إضافة جديدة
  const [firstDot, setFirstDot] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [wrongNumbers, setWrongNumbers] = useState([]);
  const [color, setColor] = useState("#fff");
  const [numbers, setNumbers] = useState({
    img1: "",
    img2: "",
    img3: "",
  });
  const colors = ["red", "blue", "green", "orange", "purple", "yellow"];
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [wordColors, setWordColors] = useState([
    "transparent",
    "transparent",
    "transparent",
  ]);

  const handleWordClick = (index) => {
    setSelectedWordIndex(index);
  };

  const applyColor = (color) => {
    const newColors = [...wordColors];
    newColors[selectedWordIndex] = color;
    setWordColors(newColors);
    setSelectedWordIndex(null);
  };

  const correctMatches = [
    { word: "six", image: "img1" },
    { word: "two", image: "img3" },
    { word: "four", image: "img2" },
  ];
  const correctNumbers = {
    img1: "6",
    img2: "4",
    img3: "2",
  };

  // ============================
  // 1️⃣ الضغط على النقطة الأولى (start-dot)
  // ============================
  const handleStartDotClick = (e) => {
    if (showAnswer || locked) return; // ⭐⭐ NEW: منع التوصيل إذا مغلق

    const rect = containerRef.current.getBoundingClientRect();

    const word = e.target.dataset.word || null;
    const image = e.target.dataset.image || null;

    // ⭐⭐ NEW: منع رسم أكثر من خط من نفس الصورة (image)
    const alreadyUsed = lines.some((line) => line.image === image);
    if (alreadyUsed) return; // ← إضافة جديدة

    setFirstDot({
      image,
      x: e.target.getBoundingClientRect().left - rect.left + 8,
      y: e.target.getBoundingClientRect().top - rect.top + 8,
    });
  };

  // ============================
  // 2️⃣ الضغط على النقطة الثانية (end-dot)
  // ============================
  const handleEndDotClick = (e) => {
    if (showAnswer || locked) return; // ⭐⭐ NEW: منع التوصيل إذا مغلق
    if (!firstDot) return;

    const rect = containerRef.current.getBoundingClientRect();

    const endWord = e.target.dataset.word || null;
    const endImage = e.target.dataset.image || null;

    const newLine = {
      x1: firstDot.x,
      y1: firstDot.y,
      x2: e.target.getBoundingClientRect().left - rect.left + 8,
      y2: e.target.getBoundingClientRect().top - rect.top + 8,

      word: firstDot.word || endWord,
      image: firstDot.image || endImage,
    };

    setLines((prev) => [...prev, newLine]);
    setFirstDot(null);
  };
  const checkAnswers2 = () => {
    if (showAnswer || locked) return;

    // ❌ فحص التوصيل
    if (lines.length < correctMatches.length) {
      ValidationAlert.info(
        "Oops!",
        "Please connect all the pairs before checking."
      );
      return;
    }

    // ❌ فحص inputs الفارغة
    const emptyInputs = Object.keys(numbers).filter(
      (img) => numbers[img].trim() === ""
    );

    if (emptyInputs.length > 0) {
      ValidationAlert.info(
        "Oops!",
        "Please write all the numbers before checking."
      );
      return;
    }

    let correctCount = 0;
    let wrongImgs = [];
    let wrongNums = [];

    // ✅ فحص الأرقام
    Object.keys(correctNumbers).forEach((img) => {
      if (numbers[img] === correctNumbers[img]) {
        correctCount++;
      } else {
        wrongNums.push(img); // ❌ خطأ رقم
      }
    });

    // ✅ فحص التوصيل
    lines.forEach((line) => {
      const isCorrect = correctMatches.some(
        (pair) => pair.word === line.word && pair.image === line.image
      );

      if (!isCorrect && !wrongImgs.includes(line.image)) {
        wrongImgs.push(line.image); // ❌ خطأ توصيل
      }
    });
    setWrongImages(wrongImgs);
    setWrongNumbers(wrongNums);
    setLocked(true);

    const total = correctMatches.length;
    const color =
      correctCount === total ? "green" : correctCount === 0 ? "red" : "orange";

    const scoreMessage = `
    <div style="font-size: 20px; margin-top: 10px; text-align:center;">
      <span style="color:${color}; font-weight:bold;">
        Score: ${correctCount} / ${total}
      </span>
    </div>
  `;

    if (correctCount === total) ValidationAlert.success(scoreMessage);
    else if (correctCount === 0) ValidationAlert.error(scoreMessage);
    else ValidationAlert.warning(scoreMessage);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        className="div-forall"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "60%",
          justifyContent: "flex-start",
        }}
      >
        <div className="container2-unit7-p6-q2">
          <h5 className="header-title-page8">
            <span className="ex-A">A</span>
            Count, write, and match. Color.
          </h5>
          <span style={{ fontSize: "14px", color: "gray" }}>
            Hint: Double Click to Color Word
          </span>
          {selectedWordIndex !== null && (
            <div className="color-palette-wb-u1-p7-q1">
              {colors.map((c) => (
                <div
                  key={c}
                  className="color-circle"
                  style={{ backgroundColor: c }}
                  onClick={() => applyColor(c)}
                />
              ))}

              {/* 🧽 زر المسح */}
              <div
                className="color-circle erase"
                onClick={() => {
                  const newColors = [...wordColors];
                  newColors[selectedWordIndex] = "transparent";
                  setWordColors(newColors);
                  setSelectedWordIndex(null);
                }}
              >
                ✕
              </div>
            </div>
          )}

          <div className="match-wrapper2" ref={containerRef}>
            {/* الجمل */}

            {/* الصور */}
            <div className="match-images-row2-wb-unit3-p1-q1">
              <div className="img-box2-wb-unit3-p1-q1">
                <div>
                  {/* <img
                    src={img1}
                    alt=""
                    onClick={() => document.getElementById("img1-dot").click()}
                  /> */}{" "}
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    1{" "}
                  </span>
                  <div className="square-container-wb-unit3-p1-q1">
                    {Array(6).fill(
                      <svg width="100" height="100">
                        <rect
                          x="10"
                          y="10"
                          width="80"
                          height="80"
                          fill={wordColors[0]}
                          stroke="black"
                          strokeWidth="2"
                          onClick={() =>
                            document.getElementById("img1-dot").click()
                          }
                          onDoubleClick={() => handleWordClick(0)} // فتح الباليت
                          onTouchEnd={() => handleWordClick(0)}
                          style={{
                            color: wordColors[0],
                            cursor: "pointer",
                            position: "relative",
                            textAlign: "start",
                          }}
                        />
                      </svg>
                    )}
                  </div>
                  {wrongImages.includes("img1") && (
                    <span className="error-mark-img-unit7-p6-q2">✕</span>
                  )}
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      value={numbers.img1}
                      onChange={(e) =>
                        setNumbers({ ...numbers, img1: e.target.value })
                      }
                      disabled={locked || showAnswer}
                      className="unscramble-input-wb-unit3-p1-q1"
                    />
                    {!showAnswer && wrongNumbers.includes("img1") && (
                      <span className="error-mark-img-unit7-p6-q2">✕</span>
                    )}
                  </div>
                </div>
                <div
                  className="dot22-unit7-p6-q2 start-dot22-wb-unit3-p1-q1"
                  data-image="img1"
                  id="img1-dot"
                  onClick={handleStartDotClick}
                ></div>
              </div>

              <div className="img-box2-wb-unit3-p1-q1">
                <div>
                  {/* <img
                    src={img2}
                    alt=""
                    onClick={() => document.getElementById("img2-dot").click()}
                  />{" "} */}
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    2{" "}
                  </span>
                  <div className="polygon-container-wb-unit3-p1-q1">
                    {Array(4).fill(
                      <svg width="100" height="100">
                        <polygon
                          points="50,10 90,90 10,90"
                          fill={wordColors[1]}
                          stroke="black"
                          strokeWidth="2"
                          onClick={() =>
                            document.getElementById("img2-dot").click()
                          }
                          onDoubleClick={() => handleWordClick(1)} // فتح الباليت
                          onTouchEnd={() => handleWordClick(1)}
                          style={{
                            color: wordColors[1],
                            cursor: "pointer",
                            position: "relative",
                            textAlign: "start",
                          }}
                        />
                      </svg>
                    )}
                  </div>
                  {wrongImages.includes("img2") && (
                    <span className="error-mark-img-unit7-p6-q2">✕</span>
                  )}
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      value={numbers.img2}
                      onChange={(e) =>
                        setNumbers({ ...numbers, img2: e.target.value })
                      }
                      disabled={locked || showAnswer}
                      className="unscramble-input-wb-unit3-p1-q1"
                    />
                    {!showAnswer && wrongNumbers.includes("img2") && (
                      <span className="error-mark-img-unit7-p6-q2">✕</span>
                    )}
                  </div>
                </div>
                <div
                  className="dot22-unit7-p6-q2 start-dot22-wb-unit3-p1-q1"
                  data-image="img2"
                  id="img2-dot"
                  onClick={handleStartDotClick}
                ></div>
              </div>

              <div className="img-box2-wb-unit3-p1-q1">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "90%",
                  }}
                >
                  {/* <img
                    src={img3}
                    alt=""
                    onClick={() => document.getElementById("img3-dot").click()}
                  />{" "} */}{" "}
                  <span style={{ color: "darkblue", fontWeight: "700" }}>
                    3{" "}
                  </span>
                  <div className="polygon-container-wb-unit3-p1-q1">
                    {Array(2).fill(
                      <svg width="100" height="100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill={wordColors[2]}
                          stroke="black"
                          strokeWidth="2"
                          onClick={() =>
                            document.getElementById("img3-dot").click()
                          }
                          onDoubleClick={() => handleWordClick(2)} // فتح الباليت
                          onTouchEnd={() => handleWordClick(2)}
                          style={{
                            color: wordColors[2],
                            cursor: "pointer",
                            position: "relative",
                            textAlign: "start",
                          }}
                        />
                      </svg>
                    )}
                  </div>
                  {wrongImages.includes("img3") && (
                    <span className="error-mark-img-unit7-p6-q2">✕</span>
                  )}
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      value={numbers.img3}
                      onChange={(e) =>
                        setNumbers({ ...numbers, img3: e.target.value })
                      }
                      disabled={locked || showAnswer}
                      className="unscramble-input-wb-unit3-p1-q1"
                    />
                    {!showAnswer && wrongNumbers.includes("img3") && (
                      <span className="error-mark-img-unit7-p6-q2">✕</span>
                    )}
                  </div>
                </div>
                <div
                  className="dot22-unit7-p6-q2 start-dot22-wb-unit3-p1-q1"
                  data-image="img3"
                  id="img3-dot"
                  onClick={handleStartDotClick}
                ></div>
              </div>
            </div>
            <div className="match-words-row2">
              <div
                className="word-box2"
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <h5
                    className="h5-wb-unit3-p1-q1"
                    onClick={() => document.getElementById("bored-dot").click()}
                  >
                    four
                  </h5>
                  <div
                    className="dot22-unit7-p6-q2 end-dot22-unit7-p6-q2"
                    data-word="four"
                    id="bored-dot"
                    onClick={handleEndDotClick}
                  ></div>
                </div>
              </div>

              <div className="word-box2">
                <div>
                  <h5
                    className="h5-wb-unit3-p1-q1"
                    onClick={() => document.getElementById("cold-dot").click()}
                  >
                    two
                  </h5>
                  <div
                    className="dot22-unit7-p6-q2 end-dot22-unit7-p6-q2"
                    data-word="two"
                    id="cold-dot"
                    onClick={handleEndDotClick}
                  ></div>
                </div>
              </div>

              <div className="word-box2">
                {" "}
                <div>
                  <h5
                    className="h5-wb-unit3-p1-q1"
                    onClick={() =>
                      document.getElementById("scared-dot").click()
                    }
                  >
                    six
                  </h5>
                  <div
                    className="dot22-unit7-p6-q2 end-dot22-unit7-p6-q2"
                    data-word="six"
                    id="scared-dot"
                    onClick={handleEndDotClick}
                  ></div>
                </div>
              </div>
            </div>
            {/* الخطوط */}
            <svg className="lines-layer2">
              {lines.map((l, i) => (
                <line
                  key={i}
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke="red"
                  strokeWidth="3"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
      <div className="action-buttons-container">
        <button
          onClick={() => {
            setLines([]);
            setWrongImages([]);
            setShowAnswer(false);
            setWrongNumbers([]);
            setSelectedWordIndex(null);
            setLocked(false); // ⭐⭐ NEW: السماح بالرسم مجدداً
            setNumbers({
              img1: "",
              img2: "",
              img3: "",
            });
            setWordColors(["transparent", "transparent", "transparent"]);
          }}
          className="try-again-button"
        >
          Start Again ↻
        </button>
        <button
          onClick={() => {
            const rect = containerRef.current.getBoundingClientRect();

            const getDotPosition = (selector) => {
              const el = document.querySelector(selector);
              if (!el) return { x: 0, y: 0 };
              const r = el.getBoundingClientRect();
              return {
                x: r.left - rect.left + 8,
                y: r.top - rect.top + 8,
              };
            };

            const finalLines = correctMatches.map((line) => ({
              ...line,
              x1: getDotPosition(`[data-word="${line.word}"]`).x,
              y1: getDotPosition(`[data-word="${line.word}"]`).y,
              x2: getDotPosition(`[data-image="${line.image}"]`).x,
              y2: getDotPosition(`[data-image="${line.image}"]`).y,
            }));

            setLines(finalLines);
            setWrongImages([]);
            setShowAnswer(true);
            setLocked(true); // ⭐⭐ NEW: منع الرسم أثناء Show Answer
            setNumbers(correctNumbers);
            setWordColors(["red", "red", "red"]);
          }}
          className="show-answer-btn swal-continue"
        >
          Show Answer
        </button>
        <button onClick={checkAnswers2} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default WB_Unit3_Page1_Q1;
