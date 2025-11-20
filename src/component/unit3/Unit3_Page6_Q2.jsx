import React, { useState } from "react";
import "./Unit3_Page6_Q2.css";
import ValidationAlert from "../Popup/ValidationAlert";

const Unit3_Page6_Q2 = () => {
  const questions = [
    {
      id: 1,
      text: "Close your book.",
      image: "../../assets/imgs/q1.jpg",
      correct: "✓",
    },
    { id: 2, text: "Quiet!", image: "../../assets/imgs/q2.jpg", correct: "✓" },
    {
      id: 3,
      text: "Take out your pencil.",
      image: "../../assets/imgs/q3.jpg",
      correct: "✗",
    },
    {
      id: 4,
      text: "Make a line.",
      image: "../../assets/imgs/q4.jpg",
      correct: "✓",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState([]);

  const selectAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const checkAnswers = () => {
    // 1) فحص الخانات الفارغة
    const isEmpty = questions.some((q) => !answers[q.id]);
    if (isEmpty) {
      ValidationAlert.info("Please choose ✓ or ✗ for all questions!");
      return;
    }

    // 2) مقارنة الإجابات
    const results = questions.map((q) =>
      answers[q.id] === q.correct ? "correct" : "wrong"
    );

    setShowResult(results);

    // 3) حساب السكور
    const correctCount = results.filter((r) => r === "correct").length;
    const total = questions.length;
    const scoreMsg = `${correctCount} / ${total}`;

    let color =
      correctCount === total ? "green" : correctCount === 0 ? "red" : "orange";

    const resultHTML = `
      <div style="font-size: 20px; text-align:center; margin-top: 8px;">
        <span style="color:${color}; font-weight:bold;">
          Score: ${scoreMsg}
        </span>
      </div>
    `;

    if (correctCount === total) ValidationAlert.success(resultHTML);
    else if (correctCount === 0) ValidationAlert.error(resultHTML);
    else ValidationAlert.warning(resultHTML);
  };

  const resetAnswers = () => {
    setAnswers({});
    setShowResult([]);
  };

  return (
    <div>
      <h5 className="header-title-page8">
        <span className="letter-of-Q">E</span> Read, look, and choose
        <span style={{ color: "red" }}> ✓ </span> or
        <span style={{ color: "red" }}> ✗</span>.
      </h5>

      <div className="unit3-q5-container">
        {questions.map((q, index) => (
          <div key={q.id} className="unit3-q5-question-box">
            <p className="unit3-q5-question-text" style={{fontSize:"20px"}}>
              <span style={{ color: "darkblue", fontWeight: "700" }}>
                {q.id}.
              </span>
              {q.text}
            </p>

            <div className="unit3-q5-flex">
              <img src={q.image} alt="" className="unit3-q5-question-img" />

              <div className="unit3-q5-options-box">
                {/* خيار الصح */}
                <div className="option-wrapper">
                  <div
                    className={`option-btn ${
                      answers[q.id] === "✓" ? "selected" : ""
                    }`}
                    onClick={() => selectAnswer(q.id, "✓")}
                  >
                    ✓
                  </div>

                  {showResult[index] === "wrong" && answers[q.id] === "✓" && (
                    <div className="unit3-q5-wrong-icon">X</div>
                  )}
                </div>

                {/* خيار الخطأ */}
                <div className="option-wrapper">
                  <div
                    className={`option-btn ${
                      answers[q.id] === "✗" ? "selected" : ""
                    }`}
                    onClick={() => selectAnswer(q.id, "✗")}
                  >
                    ✗
                  </div>

                  {showResult[index] === "wrong" && answers[q.id] === "✗" && (
                    <div className="unit3-q5-wrong-icon">X</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="action-buttons-container">
          <button onClick={resetAnswers} className="try-again-button">
            Start Again ↻
          </button>
          <button onClick={checkAnswers} className="check-button2">
            Check Answer ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unit3_Page6_Q2;
