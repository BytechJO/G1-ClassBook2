import React, { useState, useEffect, useRef } from "react";
import page_5 from "../../assets/unit3/imgs3/Right 1 Unit 03 Let's Go to School5.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import "./Unit3_Page5.css";
import Popup from "../Popup/Popup";
import Unit3_Page5_Q1 from "./Unit3_Page5_Q1";
import Unit3_Page5_Q2 from "./Unit3_Page5_Q2";
import CD24_Pg26_Instructions1_AdultLady from "../../assets/unit3/sound3/CD24.Pg26_Instructions1_Adult Lady.mp3"
import Unit3_Page5_Q3 from "./Unit3_Page5_Q3";
import Unit3_Page5_Q4 from "./Unit3_Page5_Q4";
const Unit3_Page5 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_5} />
      <span className="click-icon-unit3-page5-1 shadow-md hover:scale-110 transition">
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
           <Unit3_Page5_Q1/>
          </>
        }
      />
      <span
        className="headset-icon-CD-unit3-page5 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(1)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>

      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD24_Pg26_Instructions1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit3-page5-2 shadow-md hover:scale-110 transition">
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
            <Unit3_Page5_Q2/>
          </>
        }
      />
      <span className="click-icon-unit3-page5-3 shadow-md hover:scale-110 transition">
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
           <Unit3_Page5_Q3/>
          </>
        }
      />
      <span className="click-icon-unit3-page5-4 shadow-md hover:scale-110 transition">
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
           <Unit3_Page5_Q4/>
          </>
        }
      />
    </div>
  );
};

export default Unit3_Page5;
