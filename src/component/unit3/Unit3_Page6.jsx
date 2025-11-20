import React, { useState } from "react";
import page_6 from "../../assets/unit3/imgs3/Right 1 Unit 03 Let's Go to School6.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import "./Unit3_Page6.css";
import Unit3_Page6_Q1 from "./Unit3_Page5_Q1";
import Unit3_Page6_Q2 from "./Unit3_Page6_Q2";
import Unit3_Page6_Q3 from "./Unit3_Page6_Q3";
import CD25_Pg27_Song_AdultLady from "../../assets/unit3/sound3/CD25.Pg27_Song_Adult Lady.mp3";

const Unit3_Page6 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_6} />
      <span
        className="click-icon-unit3-page6-2 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(2)}
      >
        <PiCursorClickBold size={12} color="rgb(255, 255, 255)" />
      </span>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit3_Page6_Q2 />
          </>
        }
      />
      <span
        className="click-icon-unit3-page6-3 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(3)}
      >
        <PiCursorClickBold size={12} color="rgb(255, 255, 255)" />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit3_Page6_Q3 />
          </>
        }
      />
      <span className="headset-icon-CD-unit3-page6-1 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(4)}
        />
      </span>
      <Popup
        isOpen={activePopup === 4}
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
              <source src={CD25_Pg27_Song_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
    </div>
  );
};

export default Unit3_Page6;
