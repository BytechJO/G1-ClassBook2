import React, { useState, useRef, useEffect } from "react";
import page_1 from "../../assets/img_unit2/imgs/14.jpg";
import "./Unit2_Page1.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import unit2_page1_CD8 from "../../assets/img_unit2/sounds-unit2/CD8.Pg10_U2.Intro_Adult Lady.mp3";
import Popup from "../Popup/Popup";
import Unit2_Page1_find from "./Unit2_Page1_find";
import Unit2_Page1_Vocab from "./Unit2_Page1_Vocab";
import Unit2_Page1_Read from "./Unit2_Pag1_Read";
const Unit2_Page1 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_1} />
      <span className="headset-icon-CD-unit2-page1-1 shadow-md hover:scale-110 transition">
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
          <>
            <audio controls>
              <source src={unit2_page1_CD8} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <span className="click-icon-unit2-page1-1 shadow-md hover:scale-110 transition">
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
            <Unit2_Page1_find />
          </>
        }
      />
      <span className="headset-icon-CD-unit2-page1-2 shadow-md hover:scale-110 transition">
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
            <Unit2_Page1_Vocab />
          </>
        }
      />
      <span className="click-icon-unit2-page1-2 shadow-md hover:scale-110 transition">
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
            <Unit2_Page1_Read />
          </>
        }
      />
    </div>
  );
};

export default Unit2_Page1;
