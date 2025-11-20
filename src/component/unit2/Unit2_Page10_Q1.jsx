import React, { useState } from "react";
import "./Unit2_Page10_Q1.css";
import ValidationAlert from "../Popup/ValidationAlert";
import sound1 from "../../assets/img_unit2/sounds-unit2/Pg19_1.1_Adult Lady.mp3"
import sound2 from "../../assets/img_unit2/sounds-unit2/Pg19_1.2_Adult Lady.mp3"
import sound3 from "../../assets/img_unit2/sounds-unit2/Pg19_1.3_Adult Lady.mp3"
import sound4 from "../../assets/img_unit2/sounds-unit2/Pg19_1.4_Adult Lady.mp3"
import sound5 from "../../assets/img_unit2/sounds-unit2/Pg19_1.5_Adult Lady.mp3"
import sound6 from "../../assets/img_unit2/sounds-unit2/Pg19_1.6_Adult Lady.mp3"

const Unit2_Page10_Q1 = () => {
  const sentences = [
    { word1: "ball", word2: "pencil", num: 1 },
    { word1: "boy", word2: "pencil", num: 2 },
    { word1: "pink", word2: "bird", num: 3 },
    { word1: "pizza", word2: "bird", num: 4 },
    { word1: "ball", word2: "pink", num: 5 },
    { word1: "ball", word2: "pizza", num: 6 },
  ];

  const correct = {
    0: [0],
    1: [0],
    2: [1],
    3: [0],
    4: [1],
    5: [0],
  };

  const [circledWords, setCircledWords] = useState({});
  const [checked, setChecked] = useState(false);

  const handleWordClick = (sIndex, wIndex) => {
   if (checked) return; // 🔒 بعد الفحص لا يمكن التعديل

  setCircledWords((prev) => ({
    ...prev,
    [sIndex]: [wIndex], // 🟢 كل جملة لها اختيار واحد فقط
  }));
  };

  const checkAnswers = () => {
    if (Object.keys(circledWords).length < 6) {
      ValidationAlert.info("Oops!", "Please circle at least one mistake.");
      return;
    }

    let totalCorrect = 0;
    let studentCorrect = 0;

    for (let sIndex in correct) totalCorrect += correct[sIndex].length;

    for (let sIndex in circledWords) {
      circledWords[sIndex].forEach((wIndex) => {
        if (correct[sIndex]?.includes(wIndex)) studentCorrect++;
      });
    }

    setChecked(true);

    const scoreMessage = `Score: ${studentCorrect} / ${totalCorrect}`;
    if (studentCorrect === totalCorrect)
      ValidationAlert.success(scoreMessage);
    else if (studentCorrect === 0)
      ValidationAlert.error(scoreMessage);
    else ValidationAlert.warning(scoreMessage);
  };

  return (
    <div className="content-container10">
      <h5 className="header-title-page8">D Listen and circle.</h5>
    <audio controls>
          <source src={sound1} type="audio/mp3" />
        </audio>

      <div className="sentence-container2">
        {sentences.map((sentence, sIndex) => (
          <div key={sIndex} className="sentence-row">
            <span className="num2">{sIndex + 1}</span>
            {[sentence.word1, sentence.word2].map((word, wIndex) => {
              const isCircled = circledWords[sIndex]?.includes(wIndex);
              const isWrong =
                checked && isCircled && !correct[sIndex]?.includes(wIndex);

              return (
                <span
                  key={wIndex}
                  onClick={() => handleWordClick(sIndex, wIndex)}
                  className={`word-text10 ${isCircled ? "circled2" : ""}`}
                >
                  {word}
                  {isWrong && <span className="wrong-x10">X</span>}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div className="action-buttons-container">
        <button
          onClick={() => {
            setCircledWords({});
            setChecked(false);
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

export default Unit2_Page10_Q1;
