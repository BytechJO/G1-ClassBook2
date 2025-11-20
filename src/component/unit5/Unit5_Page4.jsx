import React, { useState, useRef } from "react";
import page_4 from "../../assets/img_unit2/imgs/17.jpg";
import "./Unit2_Page4.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import CD12_Pg13_Grammar2_AdultLady from "../../assets/img_unit2/sounds-unit2/CD12.Pg13.Grammar2_Adult Lady.mp3";
import Pg13_2_1_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg13.2.1_Adult Lady.mp3";
import Pg13_2_2_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg13.2.2_Adult Lady.mp3";
import Pg13_2_3_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg13.2.3_Adult Lady.mp3";
import Pg13_2_4_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg13.2.4_Adult Lady.mp3";
import Pg13_3_1_Hansel from "../../assets/img_unit2/sounds-unit2/Pg13.3.1_Hansel.mp3";
import Pg13_3_2_Harley from "../../assets/img_unit2/sounds-unit2/Pg13.3.2_Harley.mp3";
import Pg13_4_1_Hansel from "../../assets/img_unit2/sounds-unit2/Pg13.4.1_Hansel.mp3";
import Pg13_4_2_Harley from "../../assets/img_unit2/sounds-unit2/Pg13.4.2_Harley.mp3";
import Pg13_5_1_Tom from "../../assets/img_unit2/sounds-unit2/Pg13.5.1_Tom.mp3";
import Pg13_5_2_Sarah from "../../assets/img_unit2/sounds-unit2/Pg13.5.2_Sarah.mp3";
import Pg13_6_1_Helen from "../../assets/img_unit2/sounds-unit2/Pg13.6.1_Helen.mp3";
import Pg13_6_2_Sarah from "../../assets/img_unit2/sounds-unit2/Pg13.6.2_Sarah.mp3";
import Popup from "../Popup/Popup";
const Unit2_Page4 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const audioRef = useRef(null);

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

    checkAreaAndPlaySound(xPercent, yPercent);
  };
  const clickableAreas = [
    { x1: 9.41, y1: 12.0, x2: 37.43, y2: 14.0, sound: Pg13_2_1_AdultLady },
    { x1: 62.25, y1: 12.0, x2: 75.14, y2: 14.0, sound: Pg13_2_2_AdultLady },
    { x1: 56.0, y1: 13.0, x2: 60.0, y2: 13.0, sound: Pg13_2_3_AdultLady },
    { x1: 56.0, y1: 16.0, x2: 77.0, y2: 18.0, sound: Pg13_2_4_AdultLady },
    { x1: 9.0, y1: 34.0, x2: 35.0, y2: 29.0, sound: Pg13_3_1_Hansel },
    { x1: 16.0, y1: 29.0, x2: 39.0, y2: 30.0, sound: Pg13_3_2_Harley },
    { x1: 54.0, y1: 32.0, x2: 70.0, y2: 35.0, sound: Pg13_4_1_Hansel },
    { x1: 79.0, y1: 28.18, x2: 86.0, y2: 29.0, sound: Pg13_4_2_Harley },
    { x1: 12.00, y1: 60.0, x2: 23.02, y2: 61.0, sound: Pg13_5_1_Tom },
    { x1: 35.0, y1: 60.0, x2: 47.5, y2: 55.0, sound: Pg13_5_2_Sarah },
    { x1: 55.0, y1: 55.0, x2: 66.0, y2: 67.0, sound: Pg13_6_1_Helen },
    { x1: 76.0, y1: 61.0, x2: 87.0, y2: 62.0, sound: Pg13_6_2_Sarah },
  ];

  const checkAreaAndPlaySound = (x, y) => {
    const area = clickableAreas.find(
      (a) => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
    );

    console.log("Matched Area:", area);

    if (area) playSound(area.sound);
  };
  const playSound = (soundPath) => {
    console.log(soundPath);
    if (audioRef.current) {
      audioRef.current.src = soundPath;
      audioRef.current.play();
    }
  };

  return (
    <div className="unit2-page-background">
      <img
        src={page_4}
        style={{ display: "block" }}
        onClick={handleImageClick}
      />
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
          onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
        ></div>
      ))}
      <span className="headset-icon-CD-unit2-page4-1 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(1)}
        />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <audio controls>
              <source src={CD12_Pg13_Grammar2_AdultLady} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Unit2_Page4;
