import React, { useState, useEffect, useRef } from "react";
import page_2 from "../../assets/unit3/imgs3/Right 1 Unit 03 Let's Go to School2.jpg";
import soundSong from "../../assets/unit3/sound3/CD20.Pg23_Song_Adult Lady.mp3";
import sound1 from "../../assets/unit3/sound3/Pg23_1.1_Bebo.mp3";
import sound2 from "../../assets/unit3/sound3/Pg23_1.2_Lolo.mp3";
import sound2_2 from "../../assets/unit3/sound3/Pg23_1.2_Lolo_Take 2.mp3";
import sound3 from "../../assets/unit3/sound3/Pg23_2.1_Adult Lady.mp3";
import sound4 from "../../assets/unit3/sound3/Pg23_2.2_Adult Lady.mp3";
import sound5 from "../../assets/unit3/sound3/Pg23_2.3_Adult Lady.mp3";
import sound6 from "../../assets/unit3/sound3/Pg23_2.4_Adult Lady.mp3";
import sound7 from "../../assets/unit3/sound3/Pg23_Instruction2_Adult Lady.mp3";
import lolo_bebo from "../../assets/unit3/imgs3/lolo&bebo_unit3.jpg";
import readImg from "../../assets/unit3/imgs3/readimg_p2_Unit3.jpg";
import CD21_Pg23_Instruction1_AdultLady from "../../assets/unit3/sound3/CD21.Pg23_Instruction1_Adult Lady.mp3";
import song from "../../assets/unit3/sound3/Pg23_Song_Adult Lady.mp3";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";

import "./Unit3_Page2.css";
const Unit3_Page2 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const activeData = [
    { page: "1", title: "Come and song", sound: soundSong, imgSrc: "" },
    {
      page: "2",
      title: "Lesiten, Read and repeat",
      sound: CD21_Pg23_Instruction1_AdultLady,
      imgSrc: lolo_bebo,
    },
    {
      page: "3",
      title: "Lestine and read along",
      sound: sound7,
      imgSrc: readImg,
    },
  ];

  const audioRef = useRef(null);
  const introRef = useRef(null);
  const handleImageClick = (e, clickable) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

    checkAreaAndPlaySound(xPercent, yPercent, clickable);
  };

  const clickableAreas = [
    { x1: 12.5, y1: 42.0, x2: 29.5, y2: 65.0, sound: sound3 },
    { x1: 31.0, y1: 27.5, x2: 47.14, y2: 85.0, sound: sound4 },
    { x1: 54.2, y1: 27.5, x2: 67.9, y2: 85.0, sound: sound5 },
    { x1: 80.0, y1: 27.5, x2: 95.2, y2: 85.0, sound: sound6 },
    ,
  ];

  const clickableAreas2 = [
    { x1: 9.4, y1: 39.0, x2: 45.0, y2: 55.5, sound: sound1 },
    { x1: 52.0, y1: 39.0, x2: 86.0, y2: 55.5, sound: sound2 },
    ,
  ];
  const checkAreaAndPlaySound = (x, y, clickable) => {
    const area = clickable.find(
      (a) => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
    );

    console.log("Matched Area:", area);

    if (area) playSound(area.sound);
  };
  const playSound = (soundPath) => {
    console.log(soundPath);
    if (audioRef.current) {
      audioRef.current.src = soundPath;
      audioRef.current.play();
    }
  };
  const speaking = [
    { text: "My favorite subject is science.", sound: sound1 },
    { text: "My favorite subject is art.", sound: sound2 },
  ];

  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);

  return (
    <div className="unit3-page-background">
      <img src={page_2} />
      <span className="headset-icon-CD-unit3-page2-1 shadow-md hover:scale-110 transition">
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
              <source src={soundSong} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="headset-icon-CD-unit3-page2-2 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(2)}
        />
      </span>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <audio ref={introRef} autoPlay style={{ display: "none" }}>
              <source src={CD21_Pg23_Instruction1_AdultLady} type="audio/mp3" />
            </audio>

            <img
              src={lolo_bebo}
              style={{ height: "auto" }}
              onClick={(e) => {
                handleImageClick(e, clickableAreas2);
              }}
            />
            <audio ref={audioRef} style={{ display: "none" }} />

            {clickableAreas2.map((area, index) => (
              <div
                key={index}
                className="clickable-area"
                style={{
                  left: `${area.x1}%`,
                  top: `${area.y1}%`,
                  width: `${area.x2 - area.x1}%`,
                  height: `${area.y2 - area.y1}%`,
                }}
                onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
                onClick={() => playSound(area.sound)}
              ></div>
            ))}
          </>
        }
      />
      <span className="click-icon-unit3-page2-1 shadow-md hover:scale-110 transition">
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
          <div style={{ position: "relative" }}>
            <audio ref={introRef} autoPlay style={{ display: "none" }}>
              <source src={activeData[2].sound} type="audio/mp3" />
            </audio>
            <img
              src={activeData[2].imgSrc}
              style={{ height: "auto", width: "600px" }}
              onClick={(e) => {
                handleImageClick(e, clickableAreas);
              }}
            />
            <audio ref={audioRef} style={{ display: "none" }} />

            {clickableAreas.map((area, index) => (
              <div
                key={index}
                className="clickable-area"
                style={{
                  left: `${area.x1}%`,
                  top: `${area.y1}%`,
                  width: `${area.x2 - area.x1}%`,
                  height: `${area.y2 - area.y1}%`,
                }}
                onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
                onClick={() => playSound(area.sound)}
              ></div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Unit3_Page2;
