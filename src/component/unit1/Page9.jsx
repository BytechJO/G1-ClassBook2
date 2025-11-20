import React, { useState, useRef } from "react";
import page_9 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0009.jpg";
import Page9_Q1 from "./Page9_Q1";
import Page9_Q2 from "./Page9_Q2";
import song from "../../assets/unit1/sounds/pg9-song-all.mp3";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import AudioWithCaption from "../AudioWithCaption";
const Page9 = ({ openPopup }) => {
  const audioRef = useRef(null);
  const [activePopup, setActivePopup] = useState(null);
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];
  return (
    <div className="page_9-background">
      <img src={page_9} />

      <svg
        width="30"
        height="30"
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
              <AudioWithCaption src={song} captions={captionsExample} />
            </div>,
            true
          )
        }
        className="headset-icon-CD-page9 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="90" height="90" />
      </svg>

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup(
            <>
              <Page9_Q1 />
            </>
          )
        }
        className="click-icon-page9-1 hover:scale-110 transition"
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
              <Page9_Q2 />
            </>
          )
        }
        className="click-icon-page9-2 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>

      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Page9;
