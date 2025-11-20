import React, { useState } from "react";
import page_6 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday6.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import CD14_Pg15_Intruction1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD14.Pg15_Intruction1_Adult Lady.mp3";
import song from "../../assets/img_unit2/sounds-unit2/Pg15.Sing_Adult Lady.mp3"
import "./Unit2_Page6.css";
import Unit2_Page6_Q1 from "./Unit2_Page6_Q1";
import Unit2_Page6_Q2 from "./Unit2_Page6_Q2";
const Unit2_Page6 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_6} />
      <span className="click-icon-unit2-page6-1 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(1)}
        />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page6_Q1 />
          </>
        }
      />
      <span
        className="headset-icon-CD-unit2-page6-1 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(2)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 2}
        isAudio={true}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD14_Pg15_Intruction1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span
        className="headset-icon-CD-unit2-page6-2 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(3)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 3}
        isAudio={true}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={song} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit2-page6-2 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(4)}
        />
      </span>
      <Popup
        isOpen={activePopup === 4}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page6_Q2 />
          </>
        }
      />
    </div>
  );
};

export default Unit2_Page6;
