import "./Unit3_Page5_Q2.css";

import React, { useState } from "react";
import CD24_Pg26_Instructions1_AdultLady from "../../assets/unit3/sound3/CD24.Pg26_Instructions1_Adult Lady.mp3";
import ValidationAlert from "../Popup/ValidationAlert";

const Unit3_Page5_Q2 = () => {
  const [answers, setAnswers] = useState([null, null, null, null]);
  const [showResult, setShowResult] = useState([]);
  const [checked, setChecked] = useState(false);
  const correctData = ["1", "2", "4"];
  const options = [
    { img: "/assets/bat.png", num: "1" },
    { img: "/assets/bucket.png", num: "2" },
    { img: "/assets/box.png", num: "3" },
    { img: "/assets/boat.png", num: "4" },
    { img: "/assets/boat.png", num: "5" },
    { img: "/assets/boat.png", num: "6" },
  ];

  // ✅ نسمح فقط باختيار إجابة واحدة
  const [selected, setSelected] = useState([]);

  const handleSelect = (index) => {
    setSelected((prev) => {
      if (prev.includes(index)) {
        // إذا الضغط على خيار مُختار → نشيله
        return prev.filter((i) => i !== index);
      } else {
        // إذا الضغط على خيار غير مُختار → نضيفه
        return [...prev, index];
      }
    });
  };

  const scoreMessage = `
    <div style="font-size: 20px; text-align:center; margin-top: 8px;">
      <span style="color:green; font-weight:bold;">
         Score: 1 /1
      </span>
    </div>
  `;

  // ✅ الفحص فقط إذا الطالب اختار أو لا
  const checkAnswers = () => {
    if (selected.length === 0) {
      ValidationAlert.info("Oops!", "Please select at least one answer.");
      return;
    }

    // استخراج الأرقام المختارة
    const chosenNumbers = selected.map((index) => options[index].num);

    // نحدد للنتائج إذا الخيار صح أو غلط
    const evaluation = options.map((opt, index) => {
      if (selected.includes(index)) {
        return correctData.includes(opt.num) ? "correct" : "wrong";
      }
      return null; // خيار لم يتم اختياره
    });

    setShowResult(evaluation);
    setChecked(true);

    // حساب الإجابات الصحيحة
    const correctCount = chosenNumbers.filter((num) =>
      correctData.includes(num)
    ).length;

    // حساب السكور النهائي
    const totalCorrect = correctData.length;
    const score = `${correctCount} / ${totalCorrect}`;
    const color =
      correctCount === totalCorrect
        ? "green"
        : correctCount === 0
        ? "red"
        : "orange";
    const resultHTML = `
    <div style="font-size: 20px; text-align:center; margin-top: 8px;">
      <span style="color:${color};
                   font-weight:bold;">
         Score: ${score}
      </span>
    </div>
  `;

    if (correctCount === totalCorrect) {
      ValidationAlert.success(resultHTML);
    } else if (correctCount === 0) {
      ValidationAlert.error(resultHTML);
    } else {
      ValidationAlert.warning(resultHTML);
    }
  };

  // 🔄 زر الريست
  const resetAnswers = () => {
    setShowResult([]);
    setChecked(false);
    setSelected([]);
  };

  return (
    <div className="unit3-q1-wrapper">
      <h5 className="header-title-page8">
        <span style={{ color: "purple" }}>2</span> Does it have a{" "}
        <span style={{ color: "red" }}>short a</span> sound? Listen and circle.
      </h5>
      <audio controls>
        <source src={CD24_Pg26_Instructions1_AdultLady} type="audio/mp3" />
      </audio>
      <div className="unit3-q2-content">
        {/* الخيارات */}
        <div className="unit3-q2-options">
          {options.map((item, index) => (
            <div
              key={item.num}
              className={`unit3-q2-option-item ${
                selected.includes(index) ? "active" : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              <div style={{ position: "relative" }}>
                <span className="unit3-q2-number">{item.num}</span>
                {checked && showResult[index] === "wrong" && (
                  <div className="wrong-x-unit3-q2">X</div>
                )}
              </div>

              <img src={item.img} className="unit3-q2-option-img" alt="" />
            </div>
          ))}
        </div>
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
  );
};

export default Unit3_Page5_Q2;
