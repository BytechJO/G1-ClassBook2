import page24 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday11.jpg";
import React, { useState, useRef } from "react";

import "./Unit2_Page11.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import sound1 from "../../assets/img_unit2/sounds-unit2/Pg20_Reading1_Adult Lady.mp3";
import sound2 from "../../assets/img_unit2/sounds-unit2/Pg20_1.1_Adult Lady.mp3";
import sound3 from "../../assets/img_unit2/sounds-unit2/Pg20_1.2_Adult Lady.mp3";
import sound4 from "../../assets/img_unit2/sounds-unit2/Pg20_1.3_Adult Lady.mp3";
import sound5 from "../../assets/img_unit2/sounds-unit2/Pg20_1.4_Adult Lady.mp3";
const Unit2_Page11 = () => {
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

    { x1: 15.90, y1: 39.4, x2: 51.14, y2: 44.0, sound: sound2 },
    { x1: 56.0, y1: 39.1, x2: 93.9, y2: 44.0, sound: sound3 },
    { x1: 16.0, y1: 84.0, x2: 52.9, y2: 89.5, sound: sound4 },
    { x1: 56.0, y1: 84.5, x2: 93.7, y2: 90.9, sound: sound5 },
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
    <div className="page_2-background">
      <img
        src={page24}
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
      <span className="headset-icon-CD-unit2-page11-1 shadow-md hover:scale-110 transition">
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
              <source src={sound1} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Unit2_Page11;
