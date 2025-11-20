import React, { useState, useRef, useEffect } from "react";
import page_1 from "../../assets/unit3/imgs3/Right 1 Unit 03 Let's Go to School.jpg";
import "./Unit3_Page1.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import Pg22_U3_Intro_AdultLady from "../../assets/unit3/sound3/CD19.Pg22_U3.Intro_Adult Lady.mp3";
import Unit3_Page1_find from "./Unit3_Page1_find";
import Unit3_Page1_Vocab from "./Unit3_Page1_Vocab";
import Unit3_Page1_Read from "./Unit3_Pag1_Read";

const Unit3_Page1 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_1} />
      <span className="headset-icon-CD-unit3-page1-1 shadow-md hover:scale-110 transition">
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
              <source src={Pg22_U3_Intro_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit3-page1-1 shadow-md hover:scale-110 transition">
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
            <Unit3_Page1_find />
          </>
        }
      />
      <span className="headset-icon-CD-unit3-page1-2 shadow-md hover:scale-110 transition">
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
            <Unit3_Page1_Vocab />
          </>
        }
      />
      <span className="click-icon-unit3-page1-2 shadow-md hover:scale-110 transition">
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
            <Unit3_Page1_Read />
          </>
        }
      />
    </div>
  );
};

export default Unit3_Page1;
