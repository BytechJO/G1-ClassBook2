import React, { useState, useRef, useEffect } from "react";
import page4 from "../../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0004.jpg";
import allUnitSound from "../../../assets/unit1/sounds/U1 P4-5.mp3";
import Rabbit from "../../../assets/img_unit2/imgs/Rabbit.svg";
import img1 from "../../../assets/unit1/imgs/P1 listen and read 01.svg";
import img2 from "../../../assets/unit1/imgs/deer33.svg";
import img3 from "../../../assets/unit1/imgs/dish22.svg";
import img4 from "../../../assets/unit1/imgs/duck22.svg";
import duck from "../../../assets/unit1/sounds/Pg4_1.4_Adult Lady.mp3";
import deer from "../../../assets/unit1/sounds/Pg4_1.2_Adult Lady.mp3";
import dish from "../../../assets/unit1/sounds/Pg4_1.3_Adult Lady.mp3";
import dSound from "../../../assets/unit1/sounds/Pg4_1.1_Adult Lady.mp3";
import Page4_Interactive1 from "./Page4_Interactive1";
import Page4_vocabulary from "./Page4_vocabulary";
import AudioWithCaption from "../../AudioWithCaption";
import FourImagesWithAudio from "../../FourImagesWithAudio";
import audioBtn from "../../../assets/unit1/imgs/Page 01/Audio btn.svg";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
import longAudio from "../../../assets/unit1/sounds/pg4-instruction1-adult-lady_9KnGFLcl.mp3";
import sound1 from "../../../assets/unit1/sounds/pg4-vocabulary-1-goodbye.mp3";
import sound4 from "../../../assets/unit1/sounds/pg4-vocabulary-4-hello..mp3";
import sound5 from "../../../assets/unit1/sounds/pg4-vocabulary-5-good morning.mp3";

const Page4 = ({ openPopup }) => {
    const audioRef = useRef(null);
    const [hoveredAreaIndex, setHoveredAreaIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeAreaIndex, setActiveAreaIndex] = useState(null);
  // أصوات الصور
  const imageSounds = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(dSound),
    new Audio(deer),
    new Audio(dish),
    new Audio(duck),
  ];
  const captionsExample = [
    { start: 0, end: 4.25, text: "Page 4, Unit 1. Good morning, world." },
    { start: 4.3, end: 6.0, text: "Vocabulary." },
    { start: 6.01, end: 8.16, text: "1. Goodbye." },
    { start: 8.2, end: 10.26, text: " 2. How are you? " },
    { start: 10.3, end: 13.28, text: "3. Fine, thank you." },
    { start: 13.33, end: 16.08, text: "4. Hello. " },
    { start: 16.12, end: 18.25, text: "5. Good morning." },
    { start: 18.3, end: 21.12, text: "Page 4. Listen and read along." },
    { start: 21.15, end: 25.05, text: " D. Dear. Dish. Duck. " },
    { start: 25.1, end: 26.05, text: "Page 5. " },
    {
      start: 26.1,
      end: 36.21,
      text: "Meet my cat. Hello. How are you? I'm Stella. This is my cat. Her name is Lolo. She is one year old. She likes people.",
    },
    { start: 36.27, end: 40.17, text: " Page 5. Listen, read, and repeat. " },
    { start: 40.2, end: 42.05, text: "Hello. How are you? " },
    { start: 42.1, end: 43.19, text: "Fine, thank you. " },
    { start: 43.24, end: 46.28, text: " Page 5. Listen and read along. " },
    { start: 46.33, end: 51.03, text: "T. Table. Taxi. Tiger." },
  ];

  const clickableAreas = [
    { x1: 45, y1: 44.2, x2: 49, y2: 47.8, sound1: sound1 },
    { x1: 86.4, y1: 24, x2: 90.4, y2: 27.2, sound1: sound4 },
    { x1: 75, y1: 27, x2: 79.5, y2: 30.5, sound1: sound5 },
  ];

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
    <>
      <div className="page_4-background" style={{ position: "relative" }}>
        <audio ref={audioRef} style={{ display: "none" }} />
        <img
          src={page4}
          onClick={handleImageClick}
          style={{ display: "block" }}
        />

        {/* رسم المستطيلات التفاعلية */}
        {clickableAreas.map((area, index) => (
          <div
            key={index}
            className={`clickable-area ${
              hoveredAreaIndex === index || activeAreaIndex === index
                ? "highlight"
                : ""
            }`}
            style={{
              position: "absolute",
              left: `${area.x1}%`,
              top: `${area.y1}%`,
              width: `${area.x2 - area.x1}%`,
              height: `${area.y2 - area.y1}%`,
            }}
            onClick={() => {
              setActiveAreaIndex(index); // لتثبيت الهايلايت أثناء الصوت
              playSound(area.sound1);
            }}
            onMouseEnter={() => {
              if (!isPlaying) setHoveredAreaIndex(index);
            }}
            onMouseLeave={() => {
              if (!isPlaying) setHoveredAreaIndex(null);
            }}
          ></div>
        ))}
        <div
          className="headset-icon-CD-page4-1 hover:scale-110 transition"
          style={{ overflow: "visible" }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 90 90"
            onClick={() =>
              openPopup(
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <AudioWithCaption
                    src={allUnitSound}
                    captions={captionsExample}
                  />
                </div>,
                true
              )
            }
            style={{ overflow: "visible" }}
          >
            <image
              href={audioBtn}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        </div>

        <div
          className="click-icon-page4-1 hover:scale-110 transition"
          style={{ overflow: "visible" }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 90 90"
            onClick={() =>
              openPopup(
                <>
                  <Page4_Interactive1 />
                </>,
                false
              )
            }
            style={{ overflow: "visible" }}
          >
            <image
              href={arrowBtn}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        </div>

        <div
          className="headset-icon-CD-page4-2 hover:scale-110 transition"
          style={{ overflow: "visible" }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 90 90"
            onClick={() =>
              openPopup(
                <>
                  <Page4_vocabulary />
                </>,
                false
              )
            }
            style={{ overflow: "visible" }}
          >
            <image
              href={audioBtn}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        </div>
        <div
          className="click-icon-page4 hover:scale-110 transition"
          style={{ overflow: "visible" }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 90 90"
            onClick={() =>
              openPopup(
                <FourImagesWithAudio
                  images={[Rabbit, img1, img2, img3, img4]}
                  audioSrc={longAudio}
                  checkpoints={[0, 2.9, 3.4, 4.2, 5.1]}
                  popupOpen={true}
                  titleQ={"Listen and read along."}
                  audioArr={imageSounds}
                />,
                false
              )
            }
            style={{ overflow: "visible" }}
          >
            <image
              href={arrowBtn}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Page4;
