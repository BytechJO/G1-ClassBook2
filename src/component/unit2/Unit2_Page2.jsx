import React, { useState, useEffect, useRef } from "react";
import page_2 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday2.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import soundBirthday from "../../assets/img_unit2/sounds-unit2/CD9.Pg11_Intro1_Adult Lady.mp3";
import soundListen from "../../assets/img_unit2/sounds-unit2/CD10.Pg11_Instruction1_Adult Lady.mp3";
import Pg11_1_1_Bebo from "../../assets/img_unit2/sounds-unit2/Pg11_1.1_Bebo.mp3";
import Pg11_1_1_Stella from "../../assets/img_unit2/sounds-unit2/mix_09s (audio-joiner.com).mp3";
import Pg11_1_2_Lolo_Take from "../../assets/img_unit2/sounds-unit2/Pg11_1.2_Lolo_Take 2.mp3";
import Pg11_1_2_Lolo from "../../assets/img_unit2/sounds-unit2/Pg11_1.2_Lolo.mp3";
import Pg11_2_1_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg11_2.1_Adult Lady.mp3";
import Pg11_2_2_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg11_2.2_Adult Lady.mp3";
import Pg11_2_3_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg11_2.3_Adult Lady.mp3";
import Pg11_2_4_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg11_2.4_Adult Lady.mp3";
import Pg11_Instruction2_AdultLady from "../../assets/img_unit2/sounds-unit2/Pg11_Instruction2_Adult Lady.mp3";
import readImg from "../../assets/img_unit2/imgs/read_page2.jpg";
import Lolo_bebo from "../../assets/img_unit2/imgs/Lolo&Bebo.jpg";
import "./Unit2_Page2.css";
const Unit2_Page2 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const activeData = [
    { page: "1", title: "Birthdays Are Fun", sound: Pg11_1_1_Stella, imgSrc: "" },
    {
      page: "2",
      title: "Lesiten, Read and repeat",
      sound: soundListen,
      imgSrc: Lolo_bebo,
    },
    {
      page: "3",
      title: "Lestine and read along",
      sound: Pg11_Instruction2_AdultLady,
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
    { x1: 10.8, y1: 41.6, x2: 17.3, y2: 62.3, sound: Pg11_2_1_AdultLady },
    { x1: 26.3, y1: 31.0, x2: 38.2, y2: 77.5, sound: Pg11_2_2_AdultLady },
    { x1: 50.0, y1:  31.0, x2: 66.0, y2: 77.5, sound: Pg11_2_3_AdultLady },
    { x1: 80.0, y1: 31.0, x2: 95.8, y2: 77.5, sound: Pg11_2_4_AdultLady },
    ,
  ];

  const clickableAreas2 = [
    { x1: 17.0, y1:42.0, x2: 46.7, y2: 52.0, sound: Pg11_1_1_Bebo },
    { x1: 55.6, y1: 42.6, x2: 81.0, y2: 51.1, sound: Pg11_1_2_Lolo_Take },
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
    { text: "What’s your name?", sound: Pg11_1_1_Bebo },
    { text: "My name isLolo.", sound: Pg11_1_2_Lolo_Take },
  ];

  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);

  return (
    <div className="unit2-page-background">
      <img src={page_2} />
      <span className="headset-icon-CD-unit2-page2-1 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(1)}
        />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        isAudio={true}
        children={
          <div style={{display:"flex" ,justifyContent:"center",alignContent:"center" }}>
            <audio controls>
              <source src={activeData[0].sound} type="audio/mp3" />
            </audio>
          </div>
        }
      />
      <span className="headset-icon-CD-unit2-page2-2 shadow-md hover:scale-110 transition">
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
              src={Lolo_bebo}
              style={{ height: "auto" }}
              onClick={(e) => {
                handleImageClick(e,clickableAreas2);
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
      <span className="click-icon-unit2-page2-1 shadow-md hover:scale-110 transition">
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
          <div style={{position:"relative"}}>
            <audio ref={introRef} autoPlay style={{ display: "none" }}>
              <source src={activeData[2].sound} type="audio/mp3" />
            </audio>
            <img
              src={activeData[2].imgSrc}
              style={{ height: "auto"}}
              onClick={(e) => {
                handleImageClick(e,clickableAreas);
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

export default Unit2_Page2;
