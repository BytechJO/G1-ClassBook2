import React, { useState, useEffect, useRef } from "react";
import "./Unit2_Page9_Q1.css";
import partyhats from "../../assets/img_unit2/imgs/party hats..jpg";
import present from "../../assets/img_unit2/imgs/Present1.jpg";
import ValidationAlert from "../Popup/ValidationAlert";
const Unit2_Page9_Q1 = () => {
  const [answers, setAnswers] = useState([]);
  const [wrongWords, setWrongWords] = useState([]); // ⭐ تم التعديل هون
  const correctMatches = [
    { input: "party hats", num: "input1" },
    { input: "What is it", num: "input2" },
    { input: "It’s", num: "input3" },
    { input: "present", num: "input4" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);

    setAnswers((prev) => {
      const updated = [...prev];
      const existingIndex = updated.findIndex((ans) => ans.num === id);

      if (existingIndex !== -1) {
        updated[existingIndex] = { input: value, num: id };
      } else {
        updated.push({ input: value, num: id });
      }

      return updated;
    });
  };

  const checkAnswers = () => {
    // تأكد إنو الطالب وصل كل الأزواج

    let correctCount = 0;

    let wrong = []; // ⭐ تم التعديل هون
    // احسب كم وصلة صحيحة

    if (answers.length === 0) {
      ValidationAlert.info("Please fill in all the blanks before checking!");
      return;
    }

    correctMatches.forEach((ans, i) => {
      if (ans.input === answers[i].input) {
        correctCount++;
      } else {
        wrong.push(ans.num);
      }
    });

    setWrongWords(wrong);

    console.log(correctCount);
    console.log(wrongWords);
    const total = correctMatches.length;
    // تحديد اللون حسب النتيجة
    const color =
      correctCount === total ? "green" : correctCount === 0 ? "red" : "orange";

    // رسالة النتيجة منسقة بالألوان
    const scoreMessage = `
        <div style="font-size: 20px; margin-top: 10px; text-align:center;">
          <span style="color:${color}; font-weight:bold;">
            Score: ${correctCount} / ${total}
          </span>
        </div>
      `;

    // الحالات الثلاث

    if (total === correctCount) {
      ValidationAlert.success(scoreMessage);
    } else if (correctCount === 0) {
      ValidationAlert.error(scoreMessage);
    } else {
      ValidationAlert.warning(scoreMessage);
    }
  };

  return (
    <div className="unit2-page9-q1-container">
      <h5 className="header-title-page8">A Look and write.</h5>

      <div className="content-container-P90-Q1">
        <div className="section-one">
          <span>1</span> <img src={partyhats} className="p9-q1-img" />
          <div className="content-input">
            <input
              type="text"
              value={"What are these?"}
              readOnly
              style={{ pointerEvents: "none" }}
            />
            <input
              type="text"
              value={"These are"}
              readOnly
              style={{ pointerEvents: "none" }}
            />
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="answer-input"
                value={answers.find((a) => a.num === "input1")?.input || ""}
                id="input1"
                onChange={handleChange}
              />
              {wrongWords.includes(answers[0]?.num) && (
                <span className="error-mark-input1">✕</span>
              )}
            </div>
          </div>
        </div>

        <div className="section-two">
          <span>2</span> <img src={present} className="p9-q1-img" />
          <div className="content-input">
            <div style={{ position: "relative" }}>
              {" "}
              <input
                type="text"
                className="answer-input"
                value={answers.find((a) => a.num === "input2")?.input || ""}
                id="input2"
                onChange={handleChange}
              />
              {wrongWords.includes(answers[1]?.num) && (
                <span className="error-mark-input1">✕</span>
              )}
              ?
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="answer-input"
                value={answers.find((a) => a.num === "input3")?.input || ""}
                id="input3"
                onChange={handleChange}
              />
              {wrongWords.includes(answers[2]?.num) && (
                <span className="error-mark-input1">✕</span>
              )}
              a
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="answer-input"
                value={answers.find((a) => a.num === "input4")?.input || ""}
                id="input4"
                onChange={handleChange}
              />
              {wrongWords.includes(answers[3]?.num) && (
                <span className="error-mark-input1">✕</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="action-buttons-container">
        <button
          onClick={() => {
            setAnswers([]);
            setWrongWords([])
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

export default Unit2_Page9_Q1;
