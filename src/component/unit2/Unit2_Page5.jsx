import React, { useState, useEffect, useRef } from "react";
import page_5 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday5.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import CD13_Pg14_Instruction1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD13.Pg14_Instruction1_Adult Lady.mp3";
import "./Unit2_Page5.css";
import Unit2_Page5_Q1 from "./Unit2_Page5_Q1";
import Popup from "../Popup/Popup";
import Unit2_Page5_Q2 from "./Unit2_Page5_Q2";
import Unit2_Page5_Q3 from "./Unit2_Page5_Q3";
import Unit2_Page5_Q4 from "./Unit2_Page5_Q4";
const Unit2_Page5 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_5} />
      <span className="click-icon-unit2-page5-1 shadow-md hover:scale-110 transition">
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
            <Unit2_Page5_Q1 />
          </>
        }
      />
      <span
        className="headset-icon-CD-unit2-page5 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(1)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>

      <Popup
        isOpen={activePopup === 1}
        isAudio={true}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD13_Pg14_Instruction1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit2-page5-2 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(3)}
        />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page5_Q2 />
          </>
        }
      />
      <span className="click-icon-unit2-page5-3 shadow-md hover:scale-110 transition">
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
            <Unit2_Page5_Q3 />
          </>
        }
      />
      <span className="click-icon-unit2-page5-4 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(5)}
        />
      </span>
      <Popup
        isOpen={activePopup === 5}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page5_Q4 />
          </>
        }
      />
    </div>
  );
};

export default Unit2_Page5;
