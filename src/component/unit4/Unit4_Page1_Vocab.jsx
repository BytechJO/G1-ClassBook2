import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/unit4/imgs/G1_U4_Pg_28-29 copy.jpg";
import vocabulary from "../../assets/unit4/sounds/Pg28_Vocabulary_Adult Lady.mp3";
import { CgPlayPauseO } from "react-icons/cg";
import { FaRegCirclePlay } from "react-icons/fa6";
import page2_2 from "../../assets/unit3/imgs3/vocabimg_unit3-ClZR6yN5.jpg";
import num1 from "../../assets/unit4/imgs/Num1.svg";
import num2 from "../../assets/unit4/imgs/Num2.svg";
import num3 from "../../assets/unit4/imgs/Num3.svg";
import num4 from "../../assets/unit4/imgs/Num4.svg";
import num5 from "../../assets/unit4/imgs/Num5.svg";
import num6 from "../../assets/unit4/imgs/Num6.svg";
import num7 from "../../assets/unit4/imgs/Num7.svg";
import num8 from "../../assets/unit4/imgs/Num8.svg";
import "./Unit4_Page1.css";
const Unit4_Page1_Vocab = () => {
  const audioRef = useRef(null);

  const mainAudioRef = useRef(null); // ✅ الأوديو الرئيسي
  const clickAudioRef = useRef(null); // ✅ صوت المناطق
  const [showContinue, setShowContinue] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const stopAtSecond = 3;

  const wordTimings = [
    { start: 3.9, end:5.9 }, // party hat
    { start: 6.1, end: 8.1 }, // jellow
    { start: 8.2, end: 10.2 }, // cake
    { start: 10.3, end: 13.0 }, // Hello
    { start: 13.1, end: 15.2 }, // Good morning
    { start: 15.3, end: 18.2 },
    { start: 18.3, end: 20.3 },
    { start: 20.4, end: 22.5 },
  ];

  useEffect(() => {
    const audio = mainAudioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    const interval = setInterval(() => {
      if (audio.currentTime >= stopAtSecond) {
        audio.pause();
        setPaused(true);
        setShowContinue(true); // 👈 خلي الكبسة تضل ظاهرة دائماً بعد ثانية 3
        clearInterval(interval);
      }
    }, 200);

    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      const index = wordTimings.findIndex(
        (t) => current >= t.start && current <= t.end
      );
      setActiveIndex(index !== -1 ? index : null);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      clearInterval(interval);
    };
  }, []);

  const togglePlay = () => {
    const audio = mainAudioRef.current;

    if (audio.paused) {
      audio.play();
      setPaused(false);
    } else {
      audio.pause();
      setPaused(true);
    }
  };

  const nums = [num1, num2, num3, num4, num5, num6, num7, num8];
  return (
    <div style={{ textAlign: "center" }}>
      <audio ref={mainAudioRef} controls>
        <source src={vocabulary} type="audio/mp3" />
      </audio>
      <audio ref={clickAudioRef} style={{ display: "none" }} />
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* كلمة + صورة صغيرة */}
        <div style={{ bottom: "0%", right: "0%" }}>
          <img
            src={page2_2}
            style={{
              height: "230px",
              width: "auto",
              position: "absolute",
              bottom: "0%",
              right: "0%",
              borderRadius: "8%",
            }}
          />

          {/* النصوص */}
          <div
            className="vocab_container"
            style={{ bottom: "2%", right: "9.5%" }}
          >
            {[
              "brown",
              "blue",
              "yellow",
              "square",
              "rectangle",
              "triangle",
              "red",
              "circle",
            ].map((text, i) => (
              <h6 key={i} className={activeIndex === i ? "active" : ""}>
                {i + 1} {text}
              </h6>
            ))}
          </div>
        </div>

        {/* الأرقام */}
        {nums.map((num, i) => (
          <img
            key={i}
            src={num}
            id={`num-${i + 1}-unit4`}
            className={`num-img ${activeIndex === i ? "active" : ""}`}
            style={{
              height: "20px",
              width: "auto",
              position: "absolute",
            }}
          />
        ))}
        {/* الصورة الرئيسية */}
        <img
          src={backgroundImage}
          alt="interactive"
          style={{ height: "460px", width: "auto" }}
        />
      </div>

      {showContinue && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="play-btn swal-continue"
            onClick={togglePlay}
            style={{ marginTop: "18px" }}
          >
            {paused ? (
              <>
                Continue
                <FaRegCirclePlay size={20} style={{ color: "red" }} />
              </>
            ) : (
              <>
                Pause
                <CgPlayPauseO size={20} style={{ color: "red" }} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Unit4_Page1_Vocab;
