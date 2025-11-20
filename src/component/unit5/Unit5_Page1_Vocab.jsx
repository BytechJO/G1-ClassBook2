import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/img_unit2/imgs/find img.jpg";
import ValidationAlert from "../Popup/ValidationAlert";
import page2_2 from "../../assets/img_unit2/imgs/unit2 vocab.jpg";
import vocabulary from "../../assets/img_unit2/sounds-unit2/Pg10_Vocabulary_Adult Lady.mp3";
import { IoCaretForwardCircle } from "react-icons/io5";
const Unit2_Page1_Vocab = () => {
  const audioRef = useRef(null);

  const mainAudioRef = useRef(null); // ✅ الأوديو الرئيسي
  const clickAudioRef = useRef(null); // ✅ صوت المناطق

  const [paused, setPaused] = useState(false);
  const stopAtSecond = 3;

  useEffect(() => {
    if (!mainAudioRef.current) return;

    mainAudioRef.current.currentTime = 0;
    mainAudioRef.current.play();

    const interval = setInterval(() => {
      if (mainAudioRef.current.currentTime >= stopAtSecond) {
        mainAudioRef.current.pause();
        setPaused(true);
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

    checkAreaAndPlaySound(xPercent, yPercent);
  };

  const clickableAreas = [
    { x1: 16.0, y1: 44.0, x2: 18.0, y2: 46.0, sound: "" },
    { x1: 55.0, y1: 45.0, x2: 57.0, y2: 47.0, sound: "" },
    { x1: 70.0, y1: 42.0, x2: 72.0, y2: 44.0, sound: "" },
    { x1: 9.0, y1: 17.0, x2: 33.0, y2: 21.0, sound: "" },
    { x1: 35.0, y1: 28.0, x2: 38.0, y2: 30.0, sound: "" },
  ];

  const checkAreaAndPlaySound = (x, y) => {
    const area = clickableAreas.find(
      (a) => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
    );

    console.log("Matched Area:", area);

    if (area) playSound(area.sound);
  };
  const playSound = (soundPath) => {
    console.log(soundPath);
    if (clickAudioRef.current) {
      clickAudioRef.current.src = soundPath;
      clickAudioRef.current.play();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <audio ref={mainAudioRef} controls>
        <source src={vocabulary} type="audio/mp3" />
      </audio>
      <audio ref={clickAudioRef} style={{ display: "none" }} />
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={page2_2}
          style={{
            height: "160px",
            width: "auto",
            position: "absolute",
            bottom: "5%",
            right: "5%",
            borderRadius: "5%",
          }}
        />
        <img
          src={backgroundImage}
          alt="interactive"
          style={{ cursor: "pointer", height: "460px", width: "auto" }}
          onClick={handleImageClick}
        />

        {clickableAreas.map((area, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${area.x1}%`,
              top: `${area.y1}%`,
              width: `${area.x2 - area.x1}%`,
              height: `${area.y2 - area.y1}%`,
              cursor: "pointer",
            }}
            onClick={() => playClickSound(area.sound)}
          />
        ))}
      </div>

      {paused ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="play-btn swal-continue"
            onClick={() => {
              mainAudioRef.current.play();
              // setPaused(false);
            }}
            style={{ marginTop: "18px" }}
          >
            Continue <IoCaretForwardCircle size={20} style={{ color: "red" }} />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Unit2_Page1_Vocab;
