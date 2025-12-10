import page_1 from "../../../assets/unit6/imgs/Right 1 Unit 06 Can We Go to the Park.jpg";
import "./Unit6_Page1.css";
import Pg22_U3_Intro_AdultLady from "../../../assets/unit6/sounds/CD3.Pg56_Reading1_Adult Lady.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import Unit6_Page1_find from "./Unit6_Page1_find";
import Unit6_Page1_Vocab from "./Unit6_Page1_Vocab";
import Unit6_Page1_Read from "./Unit6_Pag1_Read";
import { useState, useRef } from "react";
import audioBtn from "../../../assets/unit1/imgs/Page 01/Audio btn.svg";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
import sound1 from "../../../assets/img_unit2/sounds-unit2/U2-01.mp3";
import sound3 from "../../../assets/img_unit2/sounds-unit2/U2-02.mp3";
import sound4 from "../../../assets/img_unit2/sounds-unit2/U2-03.mp3";
import sound5 from "../../../assets/img_unit2/sounds-unit2/U2-04.mp3";
import sound7 from "../../../assets/img_unit2/sounds-unit2/U2-04.mp3";
import sound8 from "../../../assets/img_unit2/sounds-unit2/U2-03.mp3";
const Unit6_Page1 = ({ openPopup }) => {
  const [activeAreaIndex, setActiveAreaIndex] = useState(null);
  const [hoveredAreaIndex, setHoveredAreaIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const captionsExample = [
    { start: 0, end: 4.02, text: "Page 22, unit 3. Let's go to school. " },
    { start: 4.05, end: 7.11, text: "Page 22, unit 3 vocabulary. " },
    { start: 7.14, end: 9.24, text: "1.	numbers." },
    { start: 9.27, end: 12.16, text: "2.	close your book." },
    { start: 12.2, end: 15.12, text: "3.	open your book. " },
    { start: 15.15, end: 18.12, text: "4.	make a line. " },
    { start: 18.15, end: 21.06, text: "5.	listen. " },
    { start: 21.1, end: 23.25, text: "6.	quiet." },
    { start: 23.29, end: 27.16, text: "7.	take out your pencil. " },
    { start: 27.2, end: 31.15, text: "Page 22. Listen and read along." },
    { start: 31.19, end: 35.18, text: "Short A. Ant, pan, rat. " },
    { start: 35.21, end: 38.11, text: "Page 23, come and sing. " },
    {
      start: 38.15,
      end: 49.8,
      text: "I love school. We open our books. We make a line. We do many things. My teacher plays songs. We listen. ",
    },
    { start: 49.82, end: 53.01, text: "Page 23. Listen, read, and repeat. " },
    {
      start: 53.05,
      end: 56.26,
      text: "My favorite subject is science. ",
    },
    { start: 56.3, end: 59.18, text: "My favorite subject is art. " },
    { start: 59.21, end: 63.21, text: "Page 23. Listen and read along." },
    { start: 63.24, end: 67.26, text: "Short A. Bat, cap, dad." },
  ];
  const areas = [
    // الصوت الأول – المنطقة الأساسية
    { x1: 58.84, y1: 24.1, sound: 1, isPrimary: true },
    // الصوت الأول – منطقة إضافية
    { x1: 49.7, y1: 24.73, x2: 55.7, y2: 39.5, sound: 1, isPrimary: false },

    // // الصوت الثاني – الأساسية
    { x1: 45.6, y1: 49.1, sound: 2, isPrimary: true },
    // // // // // الصوت الثاني – الإضافية
    { x1: 47.00, y1: 42.71, x2: 60.5, y2: 59.6, sound: 2, isPrimary: false },

    // // // // // الصوت الثالث – الأساسية
    { x1: 76.3, y1: 37.8, sound: 3, isPrimary: true },
    // // // // // الصوت الثالث – الإضافية
    { x1: 68.7, y1: 37.98, x2: 82.8, y2: 46.67, sound: 3, isPrimary: false },

    // // // // // الصوت الرابع – الأساسية
    { x1: 29.74, y1: 39.05, sound: 4, isPrimary: true },
    // // // // الصوت الرابع – الإضافية
    { x1: 32.45, y1: 30.06, x2: 42.54, y2: 37.98, sound: 4, isPrimary: false },

    // // // // // الصوت الخامس – الأساسية
    { x1: 76.57, y1: 66.3, sound: 5, isPrimary: true },
    // // // // الصوت الخامس – الإضافية
    { x1: 68.7, y1: 64.18, x2: 81.9, y2: 68.75, sound: 5, isPrimary: false },

    // // // // // الصوت السادس – الأساسية
    { x1: 81.0, y1: 69.5, sound: 6, isPrimary: true },
    // // // // الصوت السادس – الإضافية
    { x1: 84.23, y1: 60.37, x2: 93.54, y2: 79.87, sound: 6, isPrimary: false },
  ];
  const sounds = {
    1: sound1,
    2: sound3,
    3: sound4,
    4: sound5,
    5: sound7,
    6: sound8,
  };
  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));
  };
  const playSound = (path) => {
    if (audioRef.current) {
      audioRef.current.src = path;
      audioRef.current.play();
      setIsPlaying(true);
      setHoveredAreaIndex(null); // إزالة الهايلايت عند بدء الصوت

      audioRef.current.onended = () => {
        setIsPlaying(false);
        setHoveredAreaIndex(null);
        setActiveAreaIndex(null); // مسح الهايلايت بعد انتهاء الصوت
      };
    }
  };
  return (
    <div
      className="page1-img-wrapper"
      onClick={handleImageClick}
      style={{ backgroundImage: `url(${page_1})` }}
    >
      {/* <img src={page_1} /> */}
      <audio ref={audioRef} style={{ display: "none" }} />
      {areas.map((area, index) => {
        const isActive = activeAreaIndex === area.sound;

        // ============================
        // 1️⃣ المنطقة الأساسية → دائرة تظهر فقط عندما تكون Active
        // ============================
        if (area.isPrimary) {
          return (
            <div
              key={index}
              className={`circle-area ${isActive ? "active" : ""}`}
              style={{
                left: `${area.x1}%`,
                top: `${area.y1}%`,
              }}
              onClick={() => {
                setActiveAreaIndex(area.sound);
                playSound(sounds[area.sound]);
              }}
            ></div>
          );
        }

        // ============================
        // 2️⃣ المناطق الفرعية → مربعات داكنة مخفية ولازم
        //    عند الضغط عليها → تفعّل الدائرة الأساسية
        // ============================
        return (
          <div
            key={index}
            className="clickable-area"
            style={{
              position: "absolute",
              left: `${area.x1}%`,
              top: `${area.y1}%`,
              width: `${area.x2 - area.x1}%`,
              height: `${area.y2 - area.y1}%`,
            }}
            onClick={() => {
              setActiveAreaIndex(area.sound); // 👈 يفعل الدائرة فوق الرقم
              playSound(sounds[area.sound]);
            }}
          ></div>
        );
      })}

      <div
        className="headset-icon-CD-unit6-page1-1 hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() =>
            openPopup(
              "audio",
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <AudioWithCaption
                  src={Pg22_U3_Intro_AdultLady}
                  captions={captionsExample}
                />
              </div>
            )
          }
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
            href={audioBtn}
            x="0"
            y="0"
            width="90"
            height="90"
          />
        </svg>
      </div>

      <div
        className="click-icon-unit6-page1-1  hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() =>
            openPopup(
              "html",
              <>
                <Unit6_Page1_find />
              </>,
              false
            )
          }
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
            href={arrowBtn}
            x="0"
            y="0"
            width="90"
            height="90"
          />
        </svg>
      </div>

      <div
        className="headset-icon-CD-unit6-page1-2 hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() =>
            openPopup(
              "html",
              <>
                <Unit6_Page1_Vocab />
              </>
            )
          }
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
            href={arrowBtn}
            x="0"
            y="0"
            width="90"
            height="90"
          />
        </svg>
      </div>

      <div
        className="click-icon-unit6-page1-2 hover:scale-110 transition"
        style={{ overflow: "visible" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() =>
            openPopup(
              "html",
              <>
                <Unit6_Page1_Read />
              </>
            )
          }
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
            href={arrowBtn}
            x="0"
            y="0"
            width="90"
            height="90"
          />
        </svg>
      </div>
    </div>
  );
};

export default Unit6_Page1;
