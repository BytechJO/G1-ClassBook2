import React, { useState, useRef, useEffect } from "react";
import page4 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0004.jpg";
import allUnitSound from "../../assets/unit1/sounds/U1 P4-5.mp3"
import Rabbit from "../../assets/img_unit2/imgs/Rabbit.svg";
import img1 from "../../assets/unit1/imgs/P1 listen and read 01.svg";
import img2 from "../../assets/unit1/imgs/deer33.svg";
import img3 from "../../assets/unit1/imgs/dish22.svg";
import img4 from "../../assets/unit1/imgs/duck22.svg";
import duck from "../../assets/unit1/sounds/Pg4_1.4_Adult Lady.mp3";
import deer from "../../assets/unit1/sounds/Pg4_1.2_Adult Lady.mp3";
import dish from "../../assets/unit1/sounds/Pg4_1.3_Adult Lady.mp3";
import dSound from "../../assets/unit1/sounds/Pg4_1.1_Adult Lady.mp3";
import Page4_Interactive1 from "./Page4_Interactive1";
import Page4_vocabulary from "./Page4_vocabulary";
import AudioWithCaption from "../AudioWithCaption";
import FourImagesWithAudio from "../FourImagesWithAudio";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import longAudio from "../../assets/unit1/sounds/pg4-instruction1-adult-lady_9KnGFLcl.mp3";

const Page4 = ({ openPopup }) => {
  // أصوات الصور
  const imageSounds = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(dSound),
    new Audio(deer),
    new Audio(dish),
    new Audio(duck),
  ];
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];
  return (
    <>
      <div className="page_4-background">
        <img src={page4} />

        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
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
          className="headset-icon-CD-page4-1 hover:scale-110 transition"
        >
          <image href={audioBtn} x="0" y="0" width="45" height="45" />
        </svg>

        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
          onClick={() =>
            openPopup(
              <>
                <Page4_Interactive1 />
              </>,
              false
            )
          }
          className="click-icon-page4-1 hover:scale-110 transition"
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
                <Page4_vocabulary />
              </>,
              false
            )
          }
          className="headset-icon-CD-page4-2 hover:scale-110 transition"
        >
          <image href={audioBtn} x="0" y="0" width="45" height="45" />
        </svg>

        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
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
          className="click-icon-page4 hover:scale-110 transition"
        >
          <image href={arrowBtn} x="0" y="0" width="60" height="60" />
        </svg>
      </div>
    </>
  );
};

export default Page4;
