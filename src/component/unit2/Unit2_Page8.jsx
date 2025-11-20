import React, { useState } from "react";
import page_8 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday8.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import "./Unit2_Page8.css";
import CD16_Pg17_Instruction1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD16.Pg17.Instruction1_Adult Lady.mp3";
import Popup from "../Popup/Popup";
import Unit2_Page8_Q1 from "./Unit2_Page8_Q1";
import Unit2_Page8_Q3 from "./Unit2_Page8_Q3";
import Unit2_Page8_Q2 from "./Unit2_Page8_Q2";
const Unit2_Page8 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_8} />
      <span className="click-icon-unit2-page8-1 shadow-md hover:scale-110 transition">
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
            <Unit2_Page8_Q1 />
          </>
        }
      />
      <span className="click-icon-unit2-page8-2 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(2)}
        />
      </span>
       <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page8_Q2 />
          </>
        }
      />
      <span
        className="headset-icon-CD-unit2-page8-1 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(3)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        isAudio={true}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD16_Pg17_Instruction1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit2-page8-3 shadow-md hover:scale-110 transition">
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
            <Unit2_Page8_Q3 />
          </>
        }
      />
    </div>
  );
};

export default Unit2_Page8;
