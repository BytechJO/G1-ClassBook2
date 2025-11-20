import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/img_unit2/imgs/02-03 New copy.jpg";
import page2_2 from "../../assets/img_unit2/imgs/unit2 vocab-3CQVwmCm.jpg";
import vocabulary from "../../assets/img_unit2/sounds-unit2/Pg10_Vocabulary_Adult Lady.mp3";
import "./Unit2_Page1.css";
import { CgPlayPauseO } from "react-icons/cg";
import { FaRegCirclePlay } from "react-icons/fa6";
import num1 from "../../assets/img_unit2/imgs/Num1.svg";
import num2 from "../../assets/img_unit2/imgs/Num2.svg";
import num3 from "../../assets/img_unit2/imgs/Num3.svg";
import num4 from "../../assets/img_unit2/imgs/Num4.svg";
import num5 from "../../assets/img_unit2/imgs/Num5.svg";
import num6 from "../../assets/img_unit2/imgs/Num6.svg";
import num7 from "../../assets/img_unit2/imgs/Num7.svg";

const Unit2_Page1_Vocab = () => {
  const mainAudioRef = useRef(null);
  const clickAudioRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showContinue, setShowContinue] = useState(false);
  const stopAtSecond = 3.0;

    // إعدادات الصوت
    const [showSettings, setShowSettings] = useState(false);
    const [volume, setVolume] = useState(1);
    const [activeSpeed, setActiveSpeed] = useState(1);
    const settingsRef = useRef(null);
    const [forceRender, setForceRender] = useState(0);
    // زر الكابشن
    const [isMuted, setIsMuted] = useState(false);
  
    const changeSpeed = (rate) => {
      if (!mainAudioRef.current) return;
      mainAudioRef.current.playbackRate = rate;
      setActiveSpeed(rate);
    };
  // 🎵 فترات الكلمات داخل الأوديو الرئيسي
  const wordTimings = [
    { start: 3.2, end: 5.0 }, // party hat
    { start: 5.1, end: 7.2 }, // jellow
    { start: 7.3, end: 10.2 }, // cake
    { start: 10.3, end: 12.7 }, // Hello
    { start: 12.8, end: 15.2 }, // Good morning
    { start: 15.3, end: 17.0 },
    { start: 17.1, end: 19.3 },
  ];

  // 🟦 تشغيل الأوديو الرئيسي + إيقافه عند ثانية معينة
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
    }, 250);

    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      const index = wordTimings.findIndex(
        (t) => current >= t.start && current <= t.end
      );
      setActiveIndex(index !== -1 ? index : null);
    };

 
    // ⚡⚡ هنا الإضافة الوحيدة
    const handleEnded = () => {
      audio.currentTime = 0; // يرجع لأول ثانية
      audio.pause(); // يوقف
      setPaused(true); // زر البلاي يصير Play
      setShowContinue(true); // يظهر زر Continue
      setActiveIndex(null); // يشيل الأنيميشن عن الكلمات
    };
    const handleClickOutside = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setShowSettings(false);
      }
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded); // 👈 الإضافة
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      document.removeEventListener("mousedown", handleClickOutside);
      audio.removeEventListener("ended", handleEnded); // 👈 تنظيف الإضافة
      clearInterval(interval);
    };
  }, []);

    useEffect(() => {
      const timer = setInterval(() => {
        setForceRender((prev) => prev + 1);
      }, 1000); // كل ثانية
  
      return () => clearInterval(timer);
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

  // 🟦 تشغيل صوت المناطق (لو انضاف لاحقاً)
  const playSound = (sound) => {
    if (!sound || !clickAudioRef.current) return;
    clickAudioRef.current.src = sound;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play();
  };

  const nums = [num1, num2, num3, num4, num5, num6, num7];

  return (
        <>
    <div    style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: "0px 20px",
          position: "relative",
          left: "-10.5%",
          top: "-2%",
          alignItems: "center",
        }}>
      <audio
        ref={mainAudioRef}
        style={{ position: "relative", left: "5%" }}
        controls
      >
        <source src={vocabulary} type="audio/mp3" />
      </audio>

      <audio ref={clickAudioRef} style={{ display: "none" }} />

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* كلمة + صورة صغيرة */}
        <div style={{ bottom: "0%", right: "0%" }}>
          <img
            src={page2_2}
            style={{
              height: "200px",
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
            style={{ bottom: "0%", right: "4%" }}
          >
            {[
              "party hat",
              "jello",
              "cake",
              "happy birthday ",
              "balloons",
              "present",
              "card",
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
            id={`num-${i + 1}`}
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
    </>
  );
};

export default Unit2_Page1_Vocab;
