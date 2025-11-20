import React, { useState, useRef, useEffect } from "react";
import page_5 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0005.jpg";
import page5_CD2 from "../../assets/unit1/sounds/page5all.mp3";
import page5_CD3 from "../../assets/unit1/sounds/CD3.Pg5_Instruction1_Adult Lady.mp3";
import Rabbit from "../../assets/img_unit2/imgs/Rabbit.svg";
import Pg5_Instruction2_Adult from "../../assets/unit1/sounds/Pg5_Instruction2_Adult Lady.mp3";
import page_5_1 from "../../assets/unit1/imgs/lolo_bebo1.jpg";
import page_5_2 from "../../assets/unit1/imgs/page_5-2.png";
import page_5_3 from "../../assets/unit1/imgs/page_5-3.jpg";
import img1 from "../../assets/unit1/imgs/P2 listen and read 01.svg";
import img2 from "../../assets/unit1/imgs/Table22.svg";
import img3 from "../../assets/unit1/imgs/taxi22.svg";
import img4 from "../../assets/unit1/imgs/tiger22.svg";
import repeat1 from "../../assets/unit1/imgs/P1 listen and repeat 02.svg";
import repeat2 from "../../assets/unit1/imgs/P1 listen and repeat 03.svg";
import longsound from "../../assets/unit1/sounds/pg5-instruction2-adult-lady_B2grO9RW.mp3";
import longsound2 from "../../assets/unit1/sounds/cd3pg5-instruction1-adult-lady_6kd2jrIk.mp3";
import read from "../../assets/unit1/imgs/P1 listen and repeat 01.svg";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import AudioWithCaption from "../AudioWithCaption";
import FourImagesWithAudio from "../FourImagesWithAudio";
import Pg5_2_1_Adult from "../../assets/unit1/sounds/Pg5_2.1_Adult Lady.mp3";
import Pg5_2_2_Adult from "../../assets/unit1/sounds/Pg5_2.2_Adult Lady.mp3";
import Pg5_2_3_Adult from "../../assets/unit1/sounds/Pg5_2.3_Adult Lady.mp3";
import Pg5_2_4_Adult from "../../assets/unit1/sounds/Pg5_2.4_Adult Lady.mp3";
import Pg5_1_2_Lolo from "../../assets/unit1/sounds/Pg5_1.2_Lolo.mp3";
import Pg5_1_1_Bebo from "../../assets/unit1/sounds/Pg5_1.1_Bebo.mp3";
const Page5 = ({ openPopup }) => {

  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];

  // أصوات الصور
  const imageSounds = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(Pg5_2_1_Adult),
    new Audio(Pg5_2_2_Adult),
    new Audio(Pg5_2_3_Adult),
    new Audio(Pg5_2_4_Adult),
  ];
  const imageSounds2 = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(Pg5_1_1_Bebo),
    new Audio(Pg5_1_2_Lolo),
  ];
  
  return (
    <div className="page_5-background">
      <img src={page_5} />

      <svg
        width="30"
        height="30"
        viewBox="0 0 90 90"
        id="CD-1-page5"
        onClick={() =>
          openPopup(
            <AudioWithCaption src={page5_CD2} captions={captionsExample} />,
            true
          )
        }
        className="headset-icon-CD-page5 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="90" height="90" />
      </svg>

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        id="CD-2-page5"
        onClick={() =>
          openPopup(
            <FourImagesWithAudio
              images={[read, repeat1, repeat2]}
              audioSrc={longsound2}
              checkpoints={[0, 4, 5.9]}
              popupOpen={true}
              titleQ={`Listen, read, and repeat.`}
              audioArr={imageSounds2}
            />,
            false
          )
        }
        className="headset-icon-CD-page5 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="60" height="60" />
      </svg>

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup(
            <FourImagesWithAudio
              images={[Rabbit, img1, img2, img3, img4]}
              audioSrc={longsound}
              checkpoints={[0, 3.4, 4, 4.9, 6]}
              popupOpen={true}
              titleQ={"Listen and read along."}
              audioArr={imageSounds}
            />,
            false
          )
        }
        className="click-icon-page5 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
    </div>
  );
};

export default Page5;
