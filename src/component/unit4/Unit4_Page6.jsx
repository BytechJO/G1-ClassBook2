import React, { useState } from "react";
import page_6 from "../../assets/unit4/imgs/Right 1 Unit 04 Wonderful Shapes and Colors6.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import "./Unit4_Page6.css";

const Unit4_Page6 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit4-page-background" style={{ position: "relative" }}>
      <img src={page_6} />
      <span className="click-icon-unit4-page6-1 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(1)}
        />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={<></>}
      />
      <span
        className="click-icon-unit4-page6-2 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(2)}
      >
        <PiCursorClickBold size={12} color="rgb(255, 255, 255)" />
      </span>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            {/* <audio controls>
              <source src={CD14_Pg15_Intruction1_AdultLady} type="audio/mp3" />
            </audio> */}
          </>
        }
      />

      <span className="headset-icon-CD-unit4-page6-1 shadow-md hover:scale-110 transition">
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
      />
    </div>
  );
};

export default Unit4_Page6;
