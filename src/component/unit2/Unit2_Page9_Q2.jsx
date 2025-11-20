import React, { useRef, useState } from "react";
import ValidationAlert from "../Popup/ValidationAlert";
import "./Unit2_Page9_Q2.css";

export default function Unit2_Page9_Q2() {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  const [wrongWords, setWrongWords] = useState([]);
  const startPointRef = useRef(null);

  const handleDotDown = (e) => {
    startPointRef.current = e.target;
    const rect = containerRef.current.getBoundingClientRect();
    const x = startPointRef.current.getBoundingClientRect().left - rect.left + 8;
    const y = startPointRef.current.getBoundingClientRect().top - rect.top + 8;
    setLines((prev) => [...prev, { x1: x, y1: y, x2: x, y2: y }]);
    window.addEventListener("mousemove", followMouse);
    window.addEventListener("mouseup", stopDrawingLine);
  };

  const correctMatches = [
    { word1: "Happy", word2: "birthday!" },
    { word1: "I’m seven", word2: "years old." },
    { word1: "How old", word2: "are you?" },
    { word1: "Thank", word2: "you!" },
  ];

  const followMouse = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    if (!startPointRef.current) return;

    setLines((prev) => [
      ...prev.slice(0, -1),
      {
        x1: startPointRef.current.getBoundingClientRect().left - rect.left + 8,
        y1: startPointRef.current.getBoundingClientRect().top - rect.top + 8,
        x2: e.clientX - rect.left,
        y2: e.clientY - rect.top,
      },
    ]);
  };

  const stopDrawingLine = (e) => {
    window.removeEventListener("mousemove", followMouse);
    window.removeEventListener("mouseup", stopDrawingLine);

    const endDot = document.elementFromPoint(e.clientX, e.clientY);
    if (!endDot || !endDot.classList.contains("end-dot5")) {
      setLines((prev) => prev.slice(0, -1));
      startPointRef.current = null;
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const startWord = startPointRef.current?.dataset?.letter;
    const endWord = endDot?.dataset?.image;
    if (!startWord || !endWord) return;

    const newLine = {
      x1: startPointRef.current.getBoundingClientRect().left - rect.left + 8,
      y1: startPointRef.current.getBoundingClientRect().top - rect.top + 8,
      x2: endDot.getBoundingClientRect().left - rect.left + 8,
      y2: endDot.getBoundingClientRect().top - rect.top + 8,
      word: startWord,
      image: endWord,
    };

    setLines((prev) => [...prev.slice(0, -1), newLine]);
    startPointRef.current = null;
  };

  const checkAnswers = () => {
    if (lines.length < correctMatches.length) {
      ValidationAlert.info("Oops!", "Please connect all pairs before checking.");
      return;
    }

    let correctCount = 0;
    const total = correctMatches.length;
    let wrong = [];

    lines.forEach((line) => {
      const isCorrect = correctMatches.some(
        (pair) => pair.word1 === line.word && pair.word2 === line.image
      );
      if (isCorrect) correctCount++;
      else wrong.push(line.word);
    });

    setWrongWords(wrong);

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
    <>
      <h5 className="header-title-page8">B Read and match.</h5>

      <div className="matching-wrapper2" ref={containerRef}>
        <div className="column2 left-column">
          {["Happy", "I’m seven", "How old", "Thank"].map((word, i) => (
            <div className="word-row2" key={i}>
              <span className="num2">{i + 1}</span>
              <span className="word-text3">{word}</span>
              <div
                className="dot5 start-dot5"
                data-letter={word}
                onMouseDown={handleDotDown}
               
              ></div>
              {wrongWords.includes(word) && (
                <span className="error-mark4">X</span>
              )}
            </div>
          ))}
        </div>

        <div className="column2 right-column">
          {["are you?", "you!", "birthday!", "years old."].map((word, i) => (
            <div className="word-row2" key={i}>
              <div
                className="dot5 end-dot5"
                data-image={word}
               
              ></div>
              <span className="word-text">{word}</span>
            </div>
          ))}
        </div>

        <svg className="lines-layer5">
          {lines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="red"
              strokeWidth="3"
            />
          ))}
        </svg>
      </div>

      <div className="action-buttons-container">
        <button
          onClick={() => {
            setLines([]);
            setWrongWords([]);
          }}
          className="try-again-button"
        >
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </>
  );
}
