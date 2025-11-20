import React, { useState, useRef } from "react";
import page_4 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday4.jpg";
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
    { x1: 6.53, y1: 10.4, x2: 23.43, y2: 14.2, sound: Pg13_2_1_AdultLady },
    { x1: 54.19, y1: 10.4, x2: 71.5, y2: 14.5, sound: Pg13_2_2_AdultLady },
    { x1: 6.53, y1: 15.27, x2:30.7, y2: 19.4, sound: Pg13_2_3_AdultLady },
    { x1: 54.2, y1: 15.27, x2: 78.3, y2: 19.5, sound: Pg13_2_4_AdultLady },
    { x1: 6.7, y1:32.3, x2: 21.8, y2: 36.2, sound: Pg13_3_1_Hansel },
    { x1: 23.3, y1: 25.5, x2: 39.8, y2: 30.7, sound: Pg13_3_2_Harley },
    { x1: 55.0, y1: 30.7, x2: 74.1, y2: 33.9, sound: Pg13_4_1_Hansel },
    { x1: 81.6, y1: 26.7, x2: 93.3, y2: 31.6, sound: Pg13_4_2_Harley },
    { x1: 9.20, y1: 59.18, x2: 23.7, y2: 62.8, sound: Pg13_5_1_Tom },
    { x1: 33.3, y1: 60.2, x2: 44.6, y2: 63.5, sound: Pg13_5_2_Sarah },
    { x1: 55.0, y1: 55.0, x2: 70.1, y2: 58.27, sound: Pg13_6_1_Helen },
    { x1: 77.1, y1: 60.69, x2: 91.4, y2: 63.7, sound: Pg13_6_2_Sarah },
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
        isAudio={true}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD12_Pg13_Grammar2_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Unit2_Page4;
