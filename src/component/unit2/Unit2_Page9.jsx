import React, { useState } from "react";
import page_9 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday9.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import "./Unit2_Page9.css";
import Unit2_Page9_Q1 from "./Unit2_Page9_Q1";
import Unit2_Page9_Q2 from "./Unit2_Page9_Q2";
import Unit2_Page9_Q3 from "./Unit2_Page9_Q3";

const Unit2_Page9 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_9} />
      <span className="click-icon-unit2-page9-1 shadow-md hover:scale-110 transition">
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
            <Unit2_Page9_Q1 />
          </>
        }
      />
      <span className="click-icon-unit2-page9-2 shadow-md hover:scale-110 transition">
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
            <Unit2_Page9_Q2 />
          </>
        }
      />
      <span className="click-icon-unit2-page9-3 shadow-md hover:scale-110 transition">
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
            <Unit2_Page9_Q3 />
          </>
        }
      />
    </div>
  );
};

export default Unit2_Page9;
