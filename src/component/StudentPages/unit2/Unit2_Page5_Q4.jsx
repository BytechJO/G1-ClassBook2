import React, { useState, useRef, useEffect } from "react";
import "../unit1/Page8_Q4.css";
import "./Unit2_Page5.css";
import ValidationAlert from "../../Popup/ValidationAlert";

const Unit2_Page5_Q4 = () => {
  const data = [
    { letter: "a", number: 1 },
    { letter: "b", number: 2 },
    { letter: "c", number: 3 },
    { letter: "d", number: 4 },
    { letter: "e", number: 5 },
    { letter: "f", number: 6 },
    { letter: "g", number: 7 },
    { letter: "h", number: 8 },
    { letter: "i", number: 9 },
    { letter: "j", number: 10 },
    { letter: "k", number: 11 },
    { letter: "l", number: 12 },
    { letter: "m", number: 13 },
    { letter: "n", number: 14 },
    { letter: "o", number: 15 },
    { letter: "p", number: 16 },
    { letter: "q", number: 17 },
    { letter: "r", number: 18 },
    { letter: "s", number: 19 },
    { letter: "t", number: 20 },
    { letter: "u", number: 21 },
    { letter: "v", number: 22 },
    { letter: "w", number: 23 },
    { letter: "x", number: 24 },
    { letter: "y", number: 25 },
    { letter: "z", number: 26 },
  ];

  const questionGroups = [
    [8, 15, 23], // how
    [15, 12, 4], //old
    [1, 18, 5], // are
    [25, 15, 21], //you
  ];
  const [wrongInputs, setWrongInputs] = useState([]); // ⭐ تم التعديل هون
  const [showAnswer, setShowAnswer] = useState(false);
  const [letters, setLetters] = useState(
    questionGroups.map((group) => group.map(() => ""))
  );
  // ========================
  //  ✔ Show Answer
  // ========================
  const handleShowAnswer = () => {
    const correctLetters = questionGroups.map((group) =>
      group.map((num) => data.find((d) => d.number === num).letter)
    );

    setLetters(correctLetters);
    setWrongInputs([]);
    setShowAnswer(true);
  };

  const handleInputChange = (value, groupIndex, letterIndex) => {
    const updated = [...letters];
    updated[groupIndex][letterIndex] = value.toLowerCase();
    setLetters(updated);
  };

  const formedWords = letters.map((group) => group.join(""));
  const fullSentence = formedWords.join(" ");

  const handleCheckAnswers = () => {
    if (showAnswer) return; // ❌ إذا مستخدم show answer ما نعمل check
    // 1️⃣ التحقق من وجود فراغات
    const hasEmpty = letters.some((group) =>
      group.some((letter) => letter === "")
    );
    if (hasEmpty) {
      ValidationAlert.info(
        "Oops!",
        "Please complete all fields before checking."
      );
      return;
    }

    // 2️⃣ حساب عدد الصحيحة
    let correctCount = 0;
    let total = letters.flat().length;
    let wrong = []; // ⭐ تم التعديل هون
    for (let g = 0; g < letters.length; g++) {
      for (let l = 0; l < letters[g].length; l++) {
        const letter = letters[g][l];
        const correctNum = data.find((d) => d.letter === letter)?.number;

        if (correctNum === questionGroups[g][l]) {
          correctCount++;
        } else {
          wrong.push(`${g}-${l}`); // ⭐ تم التعديل هون
        }
      }
    }
    setWrongInputs(wrong); // ⭐ تم التعديل هون
    // 3️⃣ تحديد اللون حسب السكور
    const color =
      correctCount === total ? "green" : correctCount === 0 ? "red" : "orange";

    // 4️⃣ رسالة النتيجة
    const scoreMessage = `
    <div style="font-size: 20px; margin-top: 10px; text-align:center;">
      <span style="color:${color}; font-weight:bold;">
         Score: ${correctCount} / ${total}
      </span>
    </div>
  `;

    // 5️⃣ عرض الرسالة حسب الحالة
    if (correctCount === total) {
      ValidationAlert.success(scoreMessage);
    } else if (correctCount === 0) {
      ValidationAlert.error(scoreMessage);
    } else {
      ValidationAlert.warning(scoreMessage);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center",
        padding:"30px" }}>
      <div
        className="div-forall"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          width: "60%",
        }}
      >
        <div className="container8">
          <h5 className="header-title-page8">
            <span className="ex-A"> C</span>Answer the question.
          </h5>

          <div className="alphabet-box">
            <div className="row1">
              {data.map((c, i) => (
                <div className="letter-char">
                  <div className="data">
                    <span key={i} className="cell1">
                      {c.letter}
                    </span>
                  </div>
                  <div className="data">
                    <span key={i} className="cell1 number1">
                      {c.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="words" style={{ gap: "25px" }}>
              {questionGroups.map((group, groupIndex) => (
                <div className="word-group" key={groupIndex}>
                  {group.map((num, letterIndex) => (
                    <div className="input-h6" key={letterIndex}>
                      <h6>{num}</h6>
                      <div className="input-wrapper">
                        {" "}
                        {/* ⭐ تم التعديل هون */}
                        <input
                          className="inputs"
                          maxLength={1}
                          value={letters[groupIndex][letterIndex]}
                          onChange={(e) =>
                            handleInputChange(
                              e.target.value,
                              groupIndex,
                              letterIndex
                            )
                          }
                          style={{
                            color: showAnswer ? "red" : "black", // 🔥 لوّن الأحمر عند Show Answer
                            fontWeight: showAnswer ? "bold" : "normal",
                          }}
                        />
                        {wrongInputs.includes(
                          `${groupIndex}-${letterIndex}`
                        ) && (
                          <span className="error-mark1">✕</span> // ⭐ تم التعديل هون
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="sentence">
              {formedWords.map((word, i) => (
                <span key={i} className="sentence-word">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="action-buttons-container">
        <button
          onClick={() => {
            setLetters(questionGroups.map((group) => group.map(() => "")));
            setWrongInputs([]);
            setShowAnswer(false); // 🔄 رجوع طبيعي
          }}
          className="try-again-button"
        >
          Start Again ↻
        </button>
        {/* 🔥 زر Show Answer */}
        <button
          onClick={handleShowAnswer}
          className="show-answer-btn swal-continue"
        >
          Show Answer
        </button>
        <button onClick={handleCheckAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Unit2_Page5_Q4;
