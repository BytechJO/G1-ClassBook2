import React, { useState } from "react";
import page_6 from "../../assets/unit4/imgs/Right 1 Unit 04 Wonderful Shapes and Colors6.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import "./Unit4_Page6.css";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
const Unit4_Page6 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit4-page-background" style={{ position: "relative" }}>
      <img src={page_6} />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup(
            <>
             
            </>,
            false
          )
        }
        className="click-icon-unit4-page6-2 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>

    
       <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup(
            <>
            </>,
            false
          )
        }
        className="click-icon-unit4-page6-3  hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
  

      {/* <span className="headset-icon-CD-unit4-page6-1 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(4)}
        />
      </span>
      <Popup
        isOpen={activePopup === 4}
        onClose={() => setActivePopup(null)}
        children={<></>}
      /> */}
    </div>
  );
};

export default Unit4_Page6;
