import React, { useState } from "react";
import page_10 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday10.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import CD17_Pg19_Instruction1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD17.Pg19.Instruction1_Adult Lady.mp3";
import CD18_Pg19_Instruction1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD18.Pg19.Instruction2_Adult Lady.mp3";
import Popup from "../Popup/Popup";
import "./Unit2_Page10.css";
import Unit2_Page10_Q1 from "./Unit2_Page10_Q1";
import Unit2_Page10_Q3 from "./Unit2_Page10_Q3";
import Unit2_Page10_Q2 from "./Unit2_Page10_Q2";
import Unit2_Page10_Q4 from "./Unit2_Page10_Q4";
const Unit2_Page10 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_10} />
      <span className="click-icon-unit2-page10-1 shadow-md hover:scale-110 transition">
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
            <Unit2_Page10_Q1 />
          </>
        }
      />
      <span
        className="headset-icon-CD-unit2-page10-1 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(2)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD17_Pg19_Instruction1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit2-page10-2 shadow-md hover:scale-110 transition">
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
            <Unit2_Page10_Q2 />
          </>
        }
      />
      <span className="click-icon-unit2-page10-3 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(4)}
        />
      </span>{" "}
      <Popup
        isOpen={activePopup === 4}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page10_Q3 />
          </>
        }
      />
      <span
        className="headset-icon-CD-unit2-page10-2 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(5)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 5}
        isAudio={true}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={CD18_Pg19_Instruction1_AdultLady} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="click-icon-unit2-page10-4 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(6)}
        />
      </span>
      <Popup
        isOpen={activePopup === 6}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page10_Q4 />
          </>
        }
      />
    </div>
  );
};

export default Unit2_Page10;
