import React, { useRef, useState } from "react";
import page_6 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0006.jpg";
import CD4_Pg6_Grammar1_AdultLady from "../../assets/unit1/sounds/All Page 6.mp3";
import Pg6_1_1_AdultLady from "../../assets/unit1/sounds/Pg6_1.1_Adult Lady.mp3";
import Pg6_1_2_AdultLady from "../../assets/unit1/sounds/Pg6_1.2_Adult Lady.mp3";
import Pg6_1_3_AdultLady from "../../assets/unit1/sounds/Pg6_1.3_Adult Lady.mp3";
import Pg6_1_4_AdultLady from "../../assets/unit1/sounds/Pg6_1.4_Adult Lady.mp3";
import Pg6_1_5_AdultLady from "../../assets/unit1/sounds/Pg6_1.5_Adult Lady.mp3";
import Pg6_1_6_AdultLady from "../../assets/unit1/sounds/Pg6_1.6_Adult Lady.mp3";
import Pg6_2_1_Stella from "../../assets/unit1/sounds/Pg6_2.1_Stella.mp3";
import Pg6_2_2_ModifiedStella from "../../assets/unit1/sounds/Pg6_2.2_Modified Stella.mp3";
import Pg6_3_1_Harley from "../../assets/unit1/sounds/Pg6_3.1_Harley.mp3";
import Pg6_3_2_ModifiedHarley from "../../assets/unit1/sounds/Pg6_3.2_Modified Harley.mp3";
import AudioWithCaption from "../AudioWithCaption";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";

const Page6 = ({ openPopup }) => {
  const audioRef = useRef(null);
  const [hoveredAreaIndex, setHoveredAreaIndex] = useState(null);
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];
  // 🟩 مناطق مستطيلة (x1,y1,x2,y2)
  const clickableAreas = [
    { x1: 7.0, y1: 10.0, x2: 43.0, y2: 14.0, sound: Pg6_1_1_AdultLady },
    { x1: 61.5, y1: 10.0, x2: 75.14, y2: 14.0, sound: Pg6_1_2_AdultLady },
    { x1: 7.0, y1: 14.0, x2: 29.0, y2: 18.0, sound: Pg6_1_3_AdultLady },
    { x1: 61.5, y1: 14.0, x2: 82.0, y2: 18.0, sound: Pg6_1_4_AdultLady },
    { x1: 7.0, y1: 18.0, x2: 30.0, y2: 21.5, sound: Pg6_1_5_AdultLady },
    { x1: 61.5, y1: 18.0, x2: 83.0, y2: 21.5, sound: Pg6_1_6_AdultLady },
    { x1: 32.0, y1: 28.0, x2: 51.0, y2: 33.5, sound: Pg6_2_1_Stella },
    { x1: 62.0, y1: 32.0, x2: 71.02, y2: 35.5, sound: Pg6_2_2_ModifiedStella },
    { x1: 6.7, y1: 63.7, x2: 23.5, y2: 67.5, sound: Pg6_3_1_Harley },
    { x1: 48.0, y1: 64.0, x2: 67.3, y2: 68.2, sound: Pg6_3_2_ModifiedHarley },
  ];
  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));
  };
  const playSound = (soundPath) => {
    if (audioRef.current) {
      audioRef.current.src = soundPath;
      audioRef.current.play();
    }
  };

  return (
    <div className="page_6-background" style={{ position: "relative" }}>
      <img
        src={page_6}
        style={{ display: "block" }}
        alt="page 6"
        onClick={handleImageClick}
      />

      {/* رسم المستطيلات التفاعلية */}
      {clickableAreas.map((area, index) => (
        <div
          key={index}
          className="clickable-area"
          style={{
            position: "absolute",
            left: `${area.x1}%`,
            top: `${area.y1}%`,
            width: `${area.x2 - area.x1}%`,
            height: `${area.y2 - area.y1}%`,
          }}
          onClick={() => playSound(area.sound)}
          onMouseEnter={() => setHoveredAreaIndex(index)}
          onMouseLeave={() => setHoveredAreaIndex(null)}
        ></div>
      ))}

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup(
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <AudioWithCaption
                src={CD4_Pg6_Grammar1_AdultLady}
                captions={captionsExample}
              />
            </div>,
            true
          )
        }
        className="headset-icon-CD-page6 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Page6;
