import React, { useState, useEffect, useRef } from "react";
import page_5 from "../../assets/unit4/imgs/Right 1 Unit 04 Wonderful Shapes and Colors5.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import "./Unit4_Page5.css";
import Popup from "../Popup/Popup";

const Unit4_Page5 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit4-page-background"  style={{position:"relative"}}>
      <img src={page_5} />
      <span className="click-icon-unit4-page5-1 shadow-md hover:scale-110 transition">
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
           
          </>
        }
      />
      <span
        className="headset-icon-CD-unit4-page5 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(1)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>

      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            {/* <audio controls>
              <source src={CD13_Pg14_Instruction1_AdultLady} type="audio/mp3" />
            </audio> */}
          </>
        }
      />
      <span className="click-icon-unit4-page5-2 shadow-md hover:scale-110 transition">
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
            
          </>
        }
      />
      <span className="click-icon-unit4-page5-3 shadow-md hover:scale-110 transition">
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
           
          </>
        }
      />
      <span className="click-icon-unit4-page5-4 shadow-md hover:scale-110 transition">
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
           
          </>
        }
      />
    </div>
  );
};

export default Unit4_Page5;
