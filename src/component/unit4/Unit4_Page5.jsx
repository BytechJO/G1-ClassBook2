import React, { useState, useEffect, useRef } from "react";
import page_5 from "../../assets/unit4/imgs/Right 1 Unit 04 Wonderful Shapes and Colors5.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import "./Unit4_Page5.css";
import Popup from "../Popup/Popup";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";

const Unit4_Page5 = ({ openPopup }) => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit4-page-background" style={{ position: "relative" }}>
      <img src={page_5} />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => openPopup(<></>, false)}
        className="click-icon-unit4-page5-1 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>

      {/* <span
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
            <audio controls>
              <source src={CD13_Pg14_Instruction1_AdultLady} type="audio/mp3" />
            </audio>
          </>
        }
      /> */}

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => openPopup(<></>, false)}
        className="click-icon-unit4-page5-2  hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => openPopup(<></>, false)}
        className="click-icon-unit4-page5-3 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => openPopup(<></>, false)}
        className="click-icon-unit4-page5-4 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
    </div>
  );
};

export default Unit4_Page5;
