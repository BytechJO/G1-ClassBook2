import React, { useState } from "react";
import "./Review5_Page2_Q3.css";
import ValidationAlert from "../Popup/ValidationAlert";

const Review5_Page2_Q3 = () => {
  // ===============================
  // 🔵 1) الأسئلة (كلها داخل نفس الكومبونينت)
  // ===============================
  const questions = [
    {
      id: 1,
      parts: [
        { type: "text", value: "The" },
        { type: "blank", options: ["girl", "key"] },
        { type: "text", value: "is in the" },
        { type: "blank", options: ["kitchen", "garden"] },
        { type: "text", value: "." },
      ],
      correct: ["girl", "garden"],
      image: "/img1.png",
    },

    {
      id: 2,
      parts: [
        { type: "text", value: "The" },
        { type: "blank", options: ["key", "girl"] },
        { type: "text", value: "is" },
        { type: "blank", options: ["kite", "green"] },
        { type: "text", value: "." },
      ],
      correct: ["kite", "green"],
      image: "/img2.png",
    },
  ];

  // ===============================
  // 🔵 2) حفظ اختيارات الطالب
  // ===============================
  const [answers, setAnswers] = useState(
    questions.map((q) => q.parts.map((p) => (p.type === "blank" ? null : null)))
  );

  // ===============================
  // 🔵 3) الضغط على خيار
  // ===============================
  const handleSelect = (qIndex, blankIndex, option) => {
    const updated = [...answers];
    updated[qIndex][blankIndex] = option;
    setAnswers(updated);
  };

  // ===============================
  // 🔵 4) فحص الإجابات
  // ===============================
  const checkAnswers = () => {
    // تحقق إذا الطالب ما اختار ولا شيء
    const selectedCount = answers.flat().filter((a) => a !== null).length;
    if (selectedCount === 0) {
      ValidationAlert.info("");
      return;
    }

    let correct = 0;
    let total = 0;

    questions.forEach((q, qIndex) => {
      q.correct.forEach((correctAns, blankIndex) => {
        total++;
        if (answers[qIndex][blankIndex] === correctAns) {
          correct++;
        }
      });
    });

    if (correct === total) setPopup("Excellent! All answers are correct ✓");
    else if (correct === 0) setPopup("All your answers are wrong ✗");
    else setPopup(`You got ${correct} out of ${total} correct.`);
  };

  // ===============================
  // 🔵 JSX
  // ===============================
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        <h3 className="header-title-page8">F Look, read, and circle.</h3>
        <div>
          {questions.map((q, qIndex) => (
            <div className="question-row-review5-p2-q3" key={q.id}>
              <div className="sentence-review5-p2-q3">
                <span className="header-title-page8">{q.id}</span>
                {q.parts.map((part, pIndex) => {
                  if (part.type === "text") {
                    return (
                      <span
                        key={pIndex}
                        className="sentence-text-review5-p2-q3"
                      >
                        {part.value}
                      </span>
                    );
                  }

                  if (part.type === "blank") {
                    // blank index == ترتيب هذا الفراغ بين باقي الفراغات
                    const actualBlankIndex = q.parts
                      .filter((p) => p.type === "blank")
                      .indexOf(part);

                    return (
                      <span
                        key={pIndex}
                        className="blank-options-review5-p2-q3"
                      >
                        {part.options.map((opt, optIndex) => {
                          const isSelected =
                            answers[qIndex][actualBlankIndex] === opt;

                          return (
                            <span
                              key={optIndex}
                              className={`option-word-review5-p2-q3 ${
                                isSelected ? "selected2" : ""
                              }`}
                              onClick={() =>
                                handleSelect(qIndex, actualBlankIndex, opt)
                              }
                            >
                              {opt}
                            </span>
                          );
                        })}
                      </span>
                    );
                  }
                })}
              </div>

              <img src={q.image} className="question-img-review5-p2-q3" />
            </div>
          ))}
        </div>
      </div>
      <div className="action-buttons-container">
        <button className="try-again-button">Start Again ↻</button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Review5_Page2_Q3;
