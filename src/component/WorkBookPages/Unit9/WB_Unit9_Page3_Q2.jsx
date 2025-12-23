import React, { useState } from "react";
// import horse from "../../../assets/unit10/imgs/milk.svg";
// import cat from "../../../assets/unit10/imgs/bread.svg";
// import goat from "../../../assets/unit10/imgs/apple.svg";
// import cow from "../../../assets/unit10/imgs/icecream.svg";
// import chicken from "../../../assets/unit10/imgs/chicken.svg";
// import dog from "../../../assets/unit10/imgs/chicken.svg";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit9_Page3_Q2.css";

const WB_Unit9_Page3_Q2 = () => {
  const items = [
    { img: "./horse", value: "horse" },
    { img: "./cat", value: "cat" },
    { img: "./goat", value: "goat" },
    { img: "./cow", value: "cow" },
    { img: "./chicken", value: "chicken" },
    { img: "./dog", value: "dog" },
  ];

  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const normalize = (str) => str.toLowerCase().replace(/[-_]/g, " ").trim();

  const checkAnswer = () => {
    // 1️⃣ لازم يداير على صورة
    if (!selectedImage) {
      ValidationAlert.info("Please circle one picture first!");
      return;
    }

    // 2️⃣ لازم يكتب
    if (answer.trim() === "") {
      ValidationAlert.info("Please write an answer!");
      return;
    }

    const normalizedAnswer = normalize(answer);
    const validAnswers = items.map((item) => normalize(item.value));
    const normalizedSelected = normalize(selectedImage);

    setChecked(true);

    let score = 0;

    // 4️⃣ لازم المكتوب يطابق الصورة المتداير عليها
    if (normalizedAnswer === normalizedSelected) {
      score = 1;
    }
    setIsCorrect(score === 1);
    const color = score === 1 ? "green" : "red";

    const msg = `
    <div style="font-size:20px;text-align:center;">
      <span style="color:${color};font-weight:bold">
        Score: ${score} / 1
      </span>
    </div>
  `;
    // 3️⃣ لازم الكلمة تكون من الخيارات فقط
    if (!validAnswers.includes(normalizedAnswer)) {
      ValidationAlert.error(msg);
      return;
    }

    score === 1 ? ValidationAlert.success(msg) : ValidationAlert.error(msg);
  };

  const reset = () => {
    setAnswer("");
    setChecked(false);
    setSelectedImage(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        className="div-forall"
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h5 className="header-title-page8">
          <span className="ex-A">F</span> What do you want? Circle and write.
        </h5>

        {/* الصور */}
        <div className="images-row-wb-unit9-p3-q2">
          {items.map((item, i) => (
            <div
              key={i}
              className={`image-box-unit10-page6-q3 ${
                selectedImage === item.value ? "selected-unit10-page6-q3" : ""
              }`}
              onClick={() => {
                if (checked) return;
                setSelectedImage(item.value); // بس circle
              }}
            >
              <img
                src={item.img}
                alt={item.value}
                style={{ height: "100px", width: "auto" }}
              />
            </div>
          ))}
        </div>

        {/* الجملة */}
        <div
          className="sentence-wrapper-unit10-page6-q3"
          style={{ position: "relative" }}
        >
          <span>I want</span>

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="write-input-unit10-page6-q3"
            disabled={checked}
          />

          {checked && isCorrect === false && (
            <div className="wrong-mark-unit10-p6-q3">✕</div>
          )}
          <span>.</span>
        </div>
      </div>

      {/* الأزرار */}
      <div className="action-buttons-container">
        <button onClick={reset} className="try-again-button">
          Start Again ↻
        </button>

        <button onClick={checkAnswer} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default WB_Unit9_Page3_Q2;
