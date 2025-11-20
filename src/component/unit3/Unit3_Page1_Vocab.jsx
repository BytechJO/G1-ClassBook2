import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/unit3/imgs3/G1_U3_Pg_22-23 copy.jpg";
import page2_2 from "../../assets/img_unit2/imgs/unit2 vocab-3CQVwmCm.jpg";
import vocabulary from "../../assets/unit3/sound3/Pg22_Vocabulary_Adult Lady.mp3";
import { CgPlayPauseO } from "react-icons/cg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoCaretForwardCircle } from "react-icons/io5";
import num1 from "../../assets/unit3/imgs3/Num1.svg";
import num2 from "../../assets/unit3/imgs3/Num2.svg";
import num3 from "../../assets/unit3/imgs3/Num3.svg";
import num4 from "../../assets/unit3/imgs3/Num4.svg";
import num5 from "../../assets/unit3/imgs3/Num5.svg";
import num6 from "../../assets/unit3/imgs3/Num6.svg";
import num7 from "../../assets/unit3/imgs3/Num7.svg";

const Unit3_Page1_Vocab = () => {
  const audioRef = useRef(null);

  const mainAudioRef = useRef(null); // ✅ الأوديو الرئيسي
  const clickAudioRef = useRef(null); // ✅ صوت المناطق
  const [showContinue, setShowContinue] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const stopAtSecond = 3.5;
  // 🎵 فترات الكلمات داخل الأوديو الرئيسي
  const wordTimings = [
    { start: 3.9, end: 6.2 }, // party hat
    { start: 6.3, end: 8.5 }, // jellow
    { start: 8.6, end: 11.5 }, // cake
    { start: 11.6, end: 14.6 }, // Hello
    { start: 14.7, end: 17.2 }, // Good morning
    { start: 17.3, end: 19.8 },
    { start: 19.9, end: 23.6 },
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

  const nums = [num1, num2, num3, num4, num5, num6, num7];

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
              height: "210px",
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
            style={{ bottom: "2%", right: "0.5%" }}
          >
            {[
              "numbers",
              "Close your book.",
              "Open your book",
              "Make a line.",
              "Listen! ",
              "Quiet! ",
              "Take out your pencil.",
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
            id={`num-${i + 1}-unit3`}
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

export default Unit3_Page1_Vocab;
