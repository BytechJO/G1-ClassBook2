import React, { useState } from "react";
import deer from "../../assets/unit1/imgs/deer flip.svg";
import taxi from "../../assets/unit1/imgs/taxi_1.svg";
import table from "../../assets/unit1/imgs/table2.jpg";
import dish from "../../assets/unit1/imgs/dish3.jpg";
import ValidationAlert from "../Popup/ValidationAlert"; // تأكدي إنها موجودة
import "./Unit2_Page8_Q2.css";

const Unit2_Page8_Q2 = () => {
  const correctAnswers = ["deer", "taxi", "table", "dish"];
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [score, setScore] = useState(null);
  const [wrongInput, setWrongInputs] = useState([]);
  const handleChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = value.toLowerCase();
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    // 1️⃣ التحقق إذا في فراغات
    if (answers.some((ans) => ans.trim() === "")) {
      ValidationAlert.info("Please fill in all the blanks before checking!");
      return;
    }

    // 2️⃣ احسبي عدد الإجابات الصحيحة
    let tempScore = 0;
    let wrong = [];
    answers.forEach((ans, i) => {
      if (ans === correctAnswers[i]) {
        tempScore++;
      } else {
        wrong.push(ans);
      }
    });

    setWrongInputs(wrong);
    setScore(tempScore);

    // 3️⃣ تحديد الحالة وعرض الرسالة المناسبة
    const total = correctAnswers.length;
    const color =
      tempScore === total ? "green" : tempScore === 0 ? "red" : "orange";

    const scoreMessage = `
    <div style="font-size: 20px; margin-top: 10px; text-align:center;">
      <span style="color:${color}; font-weight:bold;">
        Score: ${tempScore} / ${total}
      </span>
    </div>
  `;

    if (tempScore === total) {
      ValidationAlert.success(scoreMessage);
    } else if (tempScore === 0) {
      ValidationAlert.error(scoreMessage);
    } else {
      ValidationAlert.warning(scoreMessage);
    }
  };

  const reset = () => {
    setAnswers(["", "", "", ""]);
    setChecked(false);
    setError("");
    setScore(null);
    setWrongInputs();
  };

  return (
    <div className="question-wrapper">
      <h5 className="header-title-page8">E Read, look, and write.</h5>
      <div className="row-content">
        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">1</span> The{" "}
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 0)}
                value={answers[0]}
              />
              {wrongInput.includes(answers[0]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
            is brown.
          </span>{" "}
          <img src={deer} alt="" className="q-img" />
        </div>

        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">2</span> My brother takes a{" "}
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 1)}
                value={answers[1]}
              />{" "}
              {wrongInput.includes(answers[1]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
            .
          </span>
          <img src={taxi} alt="" className="q-img" />
        </div>

        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">3</span> The{" "}
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 2)}
                value={answers[2]}
              />{" "}
              {wrongInput.includes(answers[2]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
            is round.
          </span>
          <img src={table} alt="" className="q-img" />
        </div>

        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">4</span> The
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 3)}
                value={answers[3]}
              />{" "}
              {wrongInput.includes(answers[3]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
            is white.
          </span>{" "}
          <img src={dish} alt="" className="q-img" />
        </div>
      </div>

      <div className="action-buttons-container">
        <button onClick={reset} className="try-again-button">
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Unit2_Page8_Q2;
