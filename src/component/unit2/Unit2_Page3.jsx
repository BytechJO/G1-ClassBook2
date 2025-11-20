import React, { useState, useRef } from "react";
import page_3 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday3.jpg";
import "./Unit2_Page3.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import CD11_Pg12_Grammar1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD11.Pg12_Grammar1_Adult Lady.mp3";
import Pg12_1_1_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg12_1.1_Adult Lady.mp3";
import Pg12_1_2_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg12_1.2_Adult Lady.mp3";
import Pg12_1_3_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg12_1.3_Adult Lady.mp3";
import Pg12_1_4_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg12_1.4_Adult Lady.mp3";
import Pg12_1_5_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg12_1.5_Adult Lady.mp3";
import Pg12_2_1_Harley from "../../assets/img_unit2/sounds-unit2/Pg12_2.1_Harley.mp3";
import Pg12_2_2_Sarah from "../../assets/img_unit2/sounds-unit2/Pg12_2.2_Sarah.mp3";
import Pg12_3_1_Helen_Take from "../../assets/img_unit2/sounds-unit2/Pg12_3.1_Helen_Take 2.mp3";
import Pg12_3_2_Stella from "../../assets/img_unit2/sounds-unit2/Pg12_3.2_Stella.mp3";
import Pg12_4_1_Hansel from "../../assets/img_unit2/sounds-unit2/Pg12_4.1_Hansel.mp3";
import Pg12_4_2_Stella from "../../assets/img_unit2/sounds-unit2/Pg12_4.2_Stella.mp3";
import Pg12_4_3_Hansel from "../../assets/img_unit2/sounds-unit2/Pg12_4.3_Hansel.mp3";
const Unit2_Page3 = () => {
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
    { x1: 6.5, y1: 10.7, x2: 30.00, y2: 15.0, sound: Pg12_1_1_AdultLady },
    { x1: 54.2, y1: 9.5, x2: 78.3, y2: 13.0, sound: Pg12_1_2_AdultLady },
    { x1: 6.5, y1: 15.8, x2: 35.6, y2: 20.0, sound: Pg12_1_3_AdultLady },
    { x1: 54.2, y1: 13.5, x2: 83.5, y2: 16.7, sound: Pg12_1_4_AdultLady },
    { x1:54.2, y1: 17.0, x2: 74.1, y2: 20.4, sound:Pg12_1_5_AdultLady },
    { x1: 14.08, y1: 27.0, x2: 29.6, y2: 31.7, sound: Pg12_2_1_Harley },
    { x1: 7.00, y1: 47.5, x2: 29.2, y2: 50.4, sound: Pg12_2_2_Sarah },
    { x1: 49.6, y1: 26.17, x2: 88.9, y2: 29.8, sound: Pg12_3_1_Helen_Take },
    { x1: 84.18, y1:37.6, x2:95.1, y2: 43.4, sound: Pg12_3_2_Stella },
    { x1: 6.76, y1: 54.40, x2: 48.30, y2: 57.9, sound: Pg12_4_1_Hansel },
    { x1: 44.0, y1: 61.6, x2: 58.3, y2: 65.1, sound: Pg12_4_2_Stella },
    { x1: 7.16, y1: 74.6, x2: 26.3, y2:80.4, sound: Pg12_4_3_Hansel},
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
      
      <img src={page_3} style={{display:"block"}} onClick={handleImageClick}  />
 {clickableAreas.map((area, index) => (
        <div
          key={index}
          className="clickable-area"
          style={{
            position:"absolute",
            left: `${area.x1}%`,
            top: `${area.y1}%`,
            width: `${area.x2 - area.x1}%`,
            height: `${area.y2 - area.y1}%`,
          }}
           onClick={() => playSound(area.sound)} 
          onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
        ></div>
      ))}
      <span className="headset-icon-CD-unit2-page3-1 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(1)}
        />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        isAudio={true}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD11_Pg12_Grammar1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <audio ref={audioRef} style={{ display: "none"}} />
    </div>
  );
};

export default Unit2_Page3;
