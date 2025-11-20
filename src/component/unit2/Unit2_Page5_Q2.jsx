import React, { useState } from "react";
import CD13_Pg14_Instruction1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD13.Pg14_Instruction1_Adult Lady.mp3";
import ValidationAlert from "../Popup/ValidationAlert";
import "./Unit2_Page5.css";
import bat from "../../assets/img_unit2/imgs/bat.jpg"
import box from "../../assets/img_unit2/imgs/box.jpg"
import bucket from "../../assets/img_unit2/imgs/bucket.jpg"
import boat from "../../assets/img_unit2/imgs/boat.jpg"
const Unit2_Page5_Q2 = () => {
  const [answers, setAnswers] = useState([null, null, null, null]);
  const [showResult, setShowResult] = useState(false);

  const items = [
    { img: bat, correct: "b" },
    { img: box, correct: "p" },
    { img:  bucket, correct: "b" },
    { img: boat, correct: "b" },
  ];

  const handleSelect = (index, value) => {

    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (answers.includes(null)) {
      ValidationAlert.info("Oops!", "Please answer all items first.");
      return;
    }

    const correctCount = answers.filter(
      (a, i) => a?.toLowerCase() === items[i].correct?.toLowerCase()
    ).length;

    const total = items.length;
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

  const resetAnswers = () => {
    setAnswers(Array(items.length).fill(null));
    setShowResult(false);
  };

  return (
    <div>
      <h5 className="header-title-page8">
        <span style={{ color: "purple" }}>2</span> Does it begin with{" "}
        <span style={{ color: "red" }}>b</span> or{" "}
        <span style={{ color: "red" }}>p</span>? Listen and circle.
      </h5>
<div style={{display:"flex" ,justifyContent:"center"}}>
        <audio controls>
          <source src={CD13_Pg14_Instruction1_AdultLady} type="audio/mp3" />
        </audio>
</div>
      <div
        className="imgFeild"
        style={{
          display: "flex",
          margin: "70px 0px",
          gap: "13px",
          flexDirection: "column",
        }}
      >
        
        <div className="bp-container">
          {items.map((item, index) => (
            <div className="bp-item" key={index}>
              <img src={item.img} className="bp-image" />
              <div className="bp-options">

                {/* B OPTION */}
                <span
                  className={`bp-option 
                    ${answers[index] === "b" ? "selected" : ""}
                    ${
                      showResult &&
                      answers[index] === "b" &&
                      answers[index] !== item.correct
                        ? "wrong-answer"
                        : ""
                    }`}
                  onClick={() => handleSelect(index, "b")}
                >
                  b
                  {showResult &&
                    answers[index] === "b" &&
                    answers[index] !== item.correct && (
                      <span className="wrong-x">X</span>
                    )}
                </span>

                {/* P OPTION */}
                <span
                  className={`bp-option 
                    ${answers[index] === "p" ? "selected" : ""}
                    ${
                      showResult &&
                      answers[index] === "p" &&
                      answers[index] !== item.correct
                        ? "wrong-answer"
                        : ""
                    }`}
                  onClick={() => handleSelect(index, "p")}
                >
                  p
                  {showResult &&
                    answers[index] === "p" &&
                    answers[index] !== item.correct && (
                      <span className="wrong-x">X</span>
                    )}
                </span>

              </div>
            </div>
          ))}
        </div>

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

export default Unit2_Page5_Q2;
