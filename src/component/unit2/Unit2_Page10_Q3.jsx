import React, { useState } from "react";
import ValidationAlert from "../Popup/ValidationAlert";
import "./Unit2_Page10_Q3.css";
import sound1 from "../../assets/img_unit2/sounds-unit2/Pg19_2.1_Adult Lady.mp3";
import sound2 from "../../assets/img_unit2/sounds-unit2/Pg19_2.2_Adult Lady.mp3";
import ball from "../../assets/img_unit2/imgs/Football.jpg";
import bag from "../../assets/img_unit2/imgs/bag.jpg";
import pants from "../../assets/img_unit2/imgs/pants.jpg";
import panda from "../../assets/img_unit2/imgs/panda.jpg";
import paper from "../../assets/img_unit2/imgs/paper.jpg";
import baby from "../../assets/img_unit2/imgs/baby.jpg";

const Unit2_Page10_Q3 = () => {
  const questions = [
    {
      id: 1,
      images: [ball, baby, bag],
      correct: "b",
      options: ["b", "p"],
    },
    {
      id: 2,
      images: [pants, paper, panda],
      correct: "p",
      options: ["b", "p"],
    },
  ];

  const [answers, setAnswers] = useState({});
  //   const [checked, setChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const handleSelect = (qId, option) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const checkAnswers = () => {
    // 🔸 تحقق إذا الطالب جاوب على الكل
    if (Object.keys(answers).length < questions.length) {
      ValidationAlert.info("Oops!", "Please answer all items first.");
      return;
    }

    // 🔹 احسب عدد الإجابات الصح
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id]?.toLowerCase() === q.correct.toLowerCase()) {
        correctCount++;
      }
    });

    const total = questions.length;
    const color =
      correctCount === total ? "green" : correctCount === 0 ? "red" : "orange";

    const scoreMessage = `
      <div style="font-size: 20px; text-align:center; margin-top: 8px;">
        <span style="color:${color}; font-weight:bold;">
          Score: ${correctCount} / ${total}
        </span>
      </div>
    `;

    if (correctCount === total) ValidationAlert.success(scoreMessage);
    else if (correctCount === 0) ValidationAlert.error(scoreMessage);
    else ValidationAlert.warning(scoreMessage);

    setTimeout(() => setShowResult(true), 200);
  };

  return (
    <div className="page10-q3-container">
      <h5 className="header-title-page8">F Listen and circle.</h5>
      <audio controls>
        <source src={sound1} type="audio/mp3" />
      </audio>

      <div className="questions-grid">
        {questions.map((q) => (
          <div key={q.id} className="question-box">
            <div className="question-number">{q.id}</div>

            <div className="images-row">
              {q.images.map((img, index) => (
                <img key={index} src={img} alt="" className="question-img" />
              ))}
            </div>

            <div className="options-row">
              {q.options.map((opt) => {
                const isSelected = answers[q.id] === opt;
                const isWrong =
                  showResult &&
                  isSelected &&
                  answers[q.id]?.toLowerCase() !== q.correct.toLowerCase();

                return (
                  <span
                    key={opt}
                    className={`option-letter ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSelect(q.id, opt)}
                  >
                    {opt}
                    {isWrong && <span className="wrong-x10-3">X</span>}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="action-buttons-container">
        <button
          onClick={() => {
            setAnswers({});
            setShowResult(false);
          }}
          className="try-again-button"
        >
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Unit2_Page10_Q3;
