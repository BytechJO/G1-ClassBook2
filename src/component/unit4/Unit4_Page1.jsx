import React, { useState, useRef, useEffect } from "react";
import page_1 from "../../assets/unit4/imgs/Right 1 Unit 04 Wonderful Shapes and Colors.jpg";
import "./Unit4_Page1.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import CD2_Pg38_Reading1_AdultLady from "../../assets/unit4/sounds/CD2.Pg38_Reading1_Adult Lady.mp3";
import Popup from "../Popup/Popup";
import Unit4_Page1_Vocab from "./Unit4_Page1_Vocab";

import Unit4_Page1_find from "./Unit4_Page1_find";

const Unit4_Page1 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit4-page-background" style={{ position: "relative" }}>
      <img src={page_1} style={{ position: "relative" }} />
      <span className="headset-icon-CD-unit4-page1-1 shadow-md hover:scale-110 transition">
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <audio controls>
              <source src={CD2_Pg38_Reading1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit4-page1-1 shadow-md hover:scale-110 transition">
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
            <Unit4_Page1_find/>
          </>
        }
      />
      <span className="headset-icon-CD-unit4-page1-2 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(3)}
        />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit4_Page1_Vocab />
          </>
        }
      />
      <span className="click-icon-unit4-page1-2 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(4)}
        />
      </span>
      <Popup
        isOpen={activePopup === 4}
        onClose={() => setActivePopup(null)}
        children={<></>}
      />
    </div>
  );
};

export default Unit4_Page1;
