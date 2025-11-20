import React, { useState, useRef } from "react";
import page_4 from "../../assets/unit3/imgs3/Right 1 Unit 03 Let's Go to School4.jpg";
import "./Unit3_Page4.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import CD23_pg25_Grammar2_AdultLady from "../../assets/unit3/sound3/CD23.Pg25_Grammar2_Adult Lady.mp3"
import sound1 from "../../assets/unit3/sound3/Pg25_2.1_Adult Lady.mp3"
import sound2 from "../../assets/unit3/sound3/Pg25_2.2_Adult Lady.mp3"
import sound3 from "../../assets/unit3/sound3/Pg25_2.3_Adult Lady.mp3"
import sound4 from "../../assets/unit3/sound3/Pg25_3.1_Female Teacher.mp3"
import sound5 from "../../assets/unit3/sound3/Pg25_4.1_Female Teacher.mp3"
import sound6 from "../../assets/unit3/sound3/Pg25_5.1_Female Teacher.mp3"
import Popup from "../Popup/Popup";
const Unit3_Page4 = () => {
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
    { x1: 9.07, y1: 10.5, x2: 30.43, y2: 14.0, sound: sound1 },
    { x1:9.07, y1: 15.4, x2: 30.43, y2: 18.7, sound: sound2 },
    { x1: 66.4, y1: 13.4, x2: 89.9, y2: 17.0, sound: sound3 },
    { x1: 11.11, y1: 22.9, x2: 30.4, y2: 26.4, sound: sound4 },
    { x1: 55.5, y1: 22.5, x2: 75.4, y2: 26.2, sound: sound5 },
    { x1: 30.4, y1: 60.0, x2: 55.6, y2: 63.5, sound: sound6 },
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
    <div className="unit3-page-background" style={{ position: "relative" }}>
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
      <span className="headset-icon-CD-unit3-page4-1 shadow-md hover:scale-110 transition">
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
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD23_pg25_Grammar2_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Unit3_Page4;
