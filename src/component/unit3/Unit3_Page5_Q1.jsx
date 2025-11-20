import React, { useState } from "react";
// import pizza2 from "../../assets/img_unit2/imgs/Pixxzza (2).jpg";
// import boy from "../../assets/img_unit2/imgs/boyxx2.jpg";
// import paint from "../../assets/img_unit2/imgs/xxaint.jpg";
// import pincle from "../../assets/img_unit2/imgs/xxPencel.jpg";
import ValidationAlert from "../Popup/ValidationAlert";
import "./Unit3_Page5_Q1.css";
const Unit3_Page5_Q1 = () => {
  const correctAnswers = ["bat", "cap", "ant", "dad"];
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [wrongInputs, setWrongInputs] = useState([]);

  const handleChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = value.toLowerCase();
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (answers.some((ans) => ans.trim() === "")) {
      ValidationAlert.info("Please fill in all the blanks before checking!");
      return;
    }

    let tempScore = 0;
    let wrong = [];
    answers.forEach((ans, i) => {
      if (ans === correctAnswers[i]) {
        tempScore++;
      } else {
        wrong.push(i); // خزن رقم السؤال الغلط بدل الكلمة
      }
    });
    setWrongInputs(wrong);

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
    setWrongInputs([]);
  };
  return (
    <div className="question-wrapper-unit3-page6-q1">
      <h5 className="header-title-page8">
        <span className="ex-A">A</span>
        <span style={{ color: "purple" }}>1</span> Look and write.
      </h5>
      <div className="row-content10-unit3-page6-q1">
        <div className="row2-unit3-page6-q1">
          <div style={{ display: "flex", gap: "15px" }}>
            <span className="num-span">1</span>{" "}
            <img src={"dddddddddd"} alt="" className="q-img-unit3-page6-q1" />
          </div>
          <span style={{ position: "relative", display: "flex" }}>
            <div className="input-wrapper-unit3-page6-q1">
              <input
                type="text"
                className="q-input-unit3-page6-q1"
                onChange={(e) => handleChange(e.target.value, 0)}
                value={answers[0]}
              />
              {wrongInputs.includes(0) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>
        </div>

        <div className="row2-unit3-page6-q1">
          <div  style={{ display: "flex", gap: "15px" }}>
            <span className="num-span">2</span>{" "}
            <img src={"dddddddddd"} alt="" className="q-img-unit3-page6-q1" />
          </div>
          <span style={{ position: "relative", display: "flex" }}>
            <div className="input-wrapper-unit3-page6-q1">
              <input
                type="text"
                className="q-input-unit3-page6-q1"
                onChange={(e) => handleChange(e.target.value, 1)}
                value={answers[1]}
              />{" "}
              {wrongInputs.includes(1) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>
        </div>

        <div className="row2-unit3-page6-q1">
          <div  style={{ display: "flex", gap: "15px" }}>
            <span className="num-span">3</span>{" "}
            <img src={"dddddddddd"} alt="" className="q-img-unit3-page6-q1" />
          </div>
          <span style={{ position: "relative", display: "flex" }}>
            <div className="input-wrapper-unit3-page6-q1">
              <input
                type="text"
                className="q-input-unit3-page6-q1"
                onChange={(e) => handleChange(e.target.value, 2)}
                value={answers[2]}
              />{" "}
              {wrongInputs.includes(2) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>
        </div>

        <div className="row2-unit3-page6-q1">
          <div  style={{ display: "flex", gap: "15px" }}>
            <span className="num-span">4</span>{" "}
            <img src={"dddddddddd"} alt="" className="q-img-unit3-page6-q1" />
          </div>
          <span style={{ position: "relative", display: "flex" }}>
            <div className="input-wrapper-unit3-page6-q1">
              <input
                type="text"
                className="q-input-unit3-page6-q1"
                onChange={(e) => handleChange(e.target.value, 3)}
                value={answers[3]}
              />{" "}
              {wrongInputs.includes(3) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>
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

export default Unit3_Page5_Q1;
