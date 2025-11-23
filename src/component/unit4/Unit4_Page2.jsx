import React, { useState, useEffect, useRef } from "react";
import page_2 from "../../assets/unit4/imgs/Right 1 Unit 04 Wonderful Shapes and Colors2.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import soundMyPicture from "../../assets/unit4/sounds/CD27Pg29_Intro1_Adult Lady.mp3";
import soundListen from "../../assets/unit4/sounds/Pg29_Instruction2_Adult Lady.mp3";
import Pg29_1_1_Bebo from "../../assets/unit4/sounds/Pg29_1.1_Bebo.mp3";
import Pg29_1_1_Tom from "../../assets/unit4/sounds/Pg29_1.1_Tom.mp3";
import Pg29_1_2_Lolo from "../../assets/unit4/sounds/Pg29_1.2_Lolo.mp3";
import Pg29_2_1_AdultLady from "../../assets/unit4/sounds/Pg29_2.1_Adult Lady.mp3";
import Pg29_2_2_AdultLady from "../../assets/unit4/sounds/Pg29_2.2_Adult Lady.mp3";
import Pg29_2_3_AdultLady from "../../assets/unit4/sounds/Pg29_2.3_Adult Lady.mp3";
import Pg29_2_4_AdultLady from "../../assets/unit4/sounds/Pg29_2.4_Adult Lady.mp3";
import CD28Pg29_Instruction1_AdultLady from "../../assets/unit4/sounds/CD28Pg29_Instruction1_Adult Lady.mp3";
import repeat1 from "../../assets/img_unit2/imgs/listen and repeat 02.svg";
import repeat2 from "../../assets/img_unit2/imgs/listen and repeat 03.svg";
import read from "../../assets/unit1/imgs/P1 listen and repeat 01.svg";
import Rabbit from "../../assets/img_unit2/imgs/Rabbit.svg";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import AudioWithCaption from "../AudioWithCaption";
import FourImagesWithAudio from "../FourImagesWithAudio";
import "./Unit4_Page2.css";
const Unit4_Page2 = ({ openPopup }) => {
  const [activePopup, setActivePopup] = useState(null);
  const activeData = [
    {
      page: "1",
      title: "Birthdays Are Fun",
      sound: soundMyPicture,
      imgSrc: "",
    },
    {
      page: "2",
      title: "Lesiten, Read and repeat",
      sound: soundListen,
      imgSrc: "Lolo_bebo",
    },
    {
      page: "3",
      title: "Lestine and read along",
      sound: CD28Pg29_Instruction1_AdultLady,
      imgSrc: "readImg",
    },
  ];
  // أصوات الصور
  const imageSounds = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(sound3),
    new Audio(sound4),
    new Audio(sound5),
    new Audio(sound6),
  ];
  const imageSounds2 = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(sound1),
    new Audio(sound2_2),
  ];
  const captionsExample = [
    { start: 0, end: 2.0, text: "Page11. Birthdays Are Fun" },
    { start: 2.05, end: 5.2, text: "Hi, everyone. Today is my birthday." },
    { start: 5.24, end: 7.2, text: " I'm seven years old." },
    { start: 7.24, end: 9.0, text: "  My friends are here. It's fun." },
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
    { x1: 10.0, y1: 44.0, x2: 16.0, y2: 69.0, sound: Pg29_2_1_AdultLady },
    { x1: 25.0, y1: 47.0, x2: 42.14, y2: 67.0, sound: Pg29_2_2_AdultLady },
    { x1: 50.0, y1: 50.0, x2: 66.0, y2: 71.0, sound: Pg29_2_3_AdultLady },
    { x1: 80.0, y1: 40.0, x2: 92.0, y2: 70.0, sound: Pg29_2_4_AdultLady },
    ,
  ];

  const clickableAreas2 = [
    { x1: 12.0, y1: 41.0, x2: 50.0, y2: 46.0, sound: Pg29_1_1_Bebo },
    { x1: 56.0, y1: 45.0, x2: 83.0, y2: 43.0, sound: Pg29_1_2_Lolo },
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
    { text: "What’s your name?", sound: Pg29_1_1_Bebo },
    { text: "My name isLolo.", sound: Pg29_1_2_Lolo },
  ];

  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);

  return (
    <div className="unit4-page-background" style={{ position: "relative" }}>
      <img src={page_2} />
       <svg
        width="30"
        height="30"
        viewBox="0 0 90 90"
        onClick={() =>
          openPopup(
            <AudioWithCaption src={soundMyPicture} captions={captionsExample} />,
            true
          )
        }
        className="headset-icon-CD-unit4-page2-1 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="90" height="90" />
      </svg>
     
      <span className="headset-icon-CD-unit4-page2-2 shadow-md hover:scale-110 transition">
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
              <source src={soundListen} type="audio/mp3" />
            </audio>

            <img
              // src={Lolo_bebo}
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
      <span className="click-icon-unit4-page2-1 shadow-md hover:scale-110 transition">
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

export default Unit4_Page2;
