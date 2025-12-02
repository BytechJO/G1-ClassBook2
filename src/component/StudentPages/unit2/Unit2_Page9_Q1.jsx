import React, { useState, useEffect, useRef } from "react";
import "./Unit2_Page9_Q1.css";
import partyhats from "../../../assets/img_unit2/imgs/party hats..jpg";
import present from "../../../assets/img_unit2/imgs/Present1.jpg";
import ValidationAlert from "../../Popup/ValidationAlert";

const Unit2_Page9_Q1 = () => {
  const [answers, setAnswers] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false); // ⭐ جديد

  const correctMatches = [
    { input: "party hats", num: "input1" },
    { input: "What is it", num: "input2" },
    { input: "It’s", num: "input3" },
    { input: "present", num: "input4" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;

    // إذا ظهر الحل ممنوع التعديل
    if (showAnswer) return;

    setAnswers((prev) => {
      const updated = [...prev];
      const idx = updated.findIndex((a) => a.num === id);

      if (idx !== -1) updated[idx] = { input: value, num: id };
      else updated.push({ input: value, num: id });

      return updated;
    });

    setWrongWords([]);
  };

  const checkAnswers = () => {
    if (showAnswer) return;
    if (answers.length === 0) {
      ValidationAlert.info("Please fill in all the blanks before checking!");
      return;
    }

    let wrong = [];
    let correctCount = 0;

    correctMatches.forEach((ans, i) => {
      if (ans.input === answers[i]?.input) correctCount++;
      else wrong.push(ans.num);
    });

    setWrongWords(wrong);

    const total = correctMatches.length;
    const color =
      correctCount === total ? "green" : correctCount === 0 ? "red" : "orange";

    const msg = `
      <div style="font-size:20px;text-align:center;">
        <span style="color:${color};font-weight:bold;">
          Score: ${correctCount} / ${total}
        </span>
      </div>
    `;

    if (correctCount === total) ValidationAlert.success(msg);
    else if (correctCount === 0) ValidationAlert.error(msg);
    else ValidationAlert.warning(msg);
  };

  const showCorrectAnswers = () => {
    setShowAnswer(true);

    setAnswers([...correctMatches]); // تعبئة الحقول بالحل الصحيح
    setWrongWords([]); // إزالة الأخطاء
  };

  const resetAll = () => {
    setAnswers([]);
    setWrongWords([]);
    setShowAnswer(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
        <div className="unit2-page9-q1-container">
          <h5 className="header-title-page8">A Look and write.</h5>

          <div className="content-container-P90-Q1">
            {/* SECTION 1 */}
            <div className="section-one">
              <span>1</span> <img src={partyhats} className="p9-q1-img" />
              <div className="content-input">
                <input type="text" value="What are these?" readOnly />
                <input type="text" value="These are" readOnly />

                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    id="input1"
                    className="answer-input"
                    value={answers.find((a) => a.num === "input1")?.input || ""}
                    onChange={handleChange}
                    style={{
                      color: showAnswer ? "red" : "black", // ⭐ لون أحمر عند show answer
                      borderColor: "black",
                    }}
                  />

                  {wrongWords.includes("input1") && !showAnswer && (
                    <span className="error-mark-input1">✕</span>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="section-two">
              <span>2</span> <img src={present} className="p9-q1-img" />
              <div className="content-input">
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    id="input2"
                    className="answer-input"
                    value={answers.find((a) => a.num === "input2")?.input || ""}
                    onChange={handleChange}
                    style={{
                      color: showAnswer ? "red" : "black",
                      borderColor: "black",
                    }}
                  />
                  {wrongWords.includes("input2") && !showAnswer && (
                    <span className="error-mark-input1">✕</span>
                  )}
                  ?
                </div>

                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    id="input3"
                    className="answer-input"
                    value={answers.find((a) => a.num === "input3")?.input || ""}
                    onChange={handleChange}
                    style={{
                      color: showAnswer ? "red" : "black",
                      borderColor: "black",
                    }}
                  />
                  {wrongWords.includes("input3") && !showAnswer && (
                    <span className="error-mark-input1">✕</span>
                  )}
                  a
                </div>

                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    id="input4"
                    className="answer-input"
                    value={answers.find((a) => a.num === "input4")?.input || ""}
                    onChange={handleChange}
                    style={{
                      color: showAnswer ? "red" : "black",
                      borderColor: "black",
                    }}
                  />
                  {wrongWords.includes("input4") && !showAnswer && (
                    <span className="error-mark-input1">✕</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="action-buttons-container">
          <button className="try-again-button" onClick={resetAll}>
            Start Again ↻
          </button>
          <button className="show-answer-btn" onClick={showCorrectAnswers}>
            Show Answer
          </button>
          <button className="check-button2" onClick={checkAnswers}>
            Check Answer ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unit2_Page9_Q1;
