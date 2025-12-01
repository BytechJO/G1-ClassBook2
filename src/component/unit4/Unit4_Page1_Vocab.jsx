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
import pauseBtn from "../../assets/unit1/imgs/Right Video Button.svg";
import { IoMdSettings } from "react-icons/io";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
const Unit4_Page1_Vocab = () => {
  const audioRef = useRef(null);
  const stopAtSecond = 3;
  const mainAudioRef = useRef(null); // ✅ الأوديو الرئيسي
  const clickAudioRef = useRef(null); // ✅ صوت المناطق
  const [showContinue, setShowContinue] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // إعدادات الصوت
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const settingsRef = useRef(null);
  const [forceRender, setForceRender] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [showCaption, setShowCaption] = useState(false);

  const wordTimings = [
    { start: 3.9, end: 5.9 }, // party hat
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
        setIsPlaying(false);
        setShowContinue(true);
        clearInterval(interval);
      }
    }, 100);

    // عند انتهاء الأوديو يرجع يبطل أنيميشن + يظهر Continue
    const handleEnded = () => {
      audio.currentTime = 0;
      setPaused(true);
      setShowContinue(true);
      setIsPlaying(false);
      setActiveIndex(null);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      clearInterval(interval);
      audio.removeEventListener("ended", handleEnded);
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

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPaused(false);
      setIsPlaying(true);
    } else {
      audio.pause();
      setPaused(true);
      setIsPlaying(false);
    }
  };

  const nums = [num1, num2, num3, num4, num5, num6, num7, num8];
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "flex-start",
          margin: "0px 20px",
          position: "relative",
          alignItems: "center",
        }}
      >
        <div className="audio-popup-vocab">
          <div className="audio-inner player-ui">
            <audio
              ref={mainAudioRef}
              src={vocabulary}
              onTimeUpdate={(e) => {
                const time = e.target.currentTime;
                setCurrent(time);

                // تشغيل لون الكلمات
                const idx = wordTimings.findIndex(
                  (t) => time >= t.start && time <= t.end
                );
                setActiveIndex(idx !== -1 ? idx : null);
              }}
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
            ></audio>
            {/* Play / Pause */}
            {/* الوقت - السلايدر - الوقت */}
            <div className="top-row">
              <span className="audio-time">
                {new Date(current * 1000).toISOString().substring(14, 19)}
              </span>

              <input
                type="range"
                className="audio-slider"
                min="0"
                max={duration}
                value={current}
                onChange={(e) => {
                  mainAudioRef.current.currentTime = e.target.value;
                  updateCaption(Number(e.target.value));
                }}
                style={{
                  background: `linear-gradient(to right, #8247ffff ${
                    (current / duration) * 100
                  }%, #d9d9d9ff ${(current / duration) * 100}%)`,
                }}
              />

              <span className="audio-time">
                {new Date(duration * 1000).toISOString().substring(14, 19)}
              </span>
            </div>
            {/* الأزرار 3 أزرار بنفس السطر */}
            <div className="bottom-row">
              {/* فقاعة */}
              <div
                className={`round-btn ${showCaption ? "active" : ""}`}
                onClick={() => setShowCaption(!showCaption)}
              >
                <TbMessageCircle size={36} />
              </div>

              {/* Play */}
              <button className="play-btn2" onClick={togglePlay}>
                {isPlaying ? <FaPause size={26} /> : <FaPlay size={26} />}
              </button>

              {/* Settings */}
              <div className="settings-wrapper" ref={settingsRef}>
                <button
                  className={`round-btn ${showSettings ? "active" : ""}`}
                  onClick={() => setShowSettings(!showSettings)}
                >
                  <IoMdSettings size={36} />
                </button>

                {showSettings && (
                  <div className="settings-popup">
                    <label>Volume</label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={(e) => {
                        setVolume(e.target.value);
                        audioRef.current.volume = e.target.value;
                      }}
                    />
                  </div>
                )}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
              style={{ bottom: "2%", right: "7.5%" }}
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
                <h6
                  key={i}
                  className={
                    activeIndex === i || clickedIndex === i ? "active" : ""
                  }
                  onClick={() => {
                    setClickedIndex(i);

                    // يرجع يشيل الانيميشن بعد 500ms (حسب زمن أنيميشنك)
                    setTimeout(() => setClickedIndex(null), 500);
                  }}
                >
                  {i + 1} {text}
                </h6>
              ))}
            </div>

            {/* الأرقام */}
            {nums.map((num, i) => (
              <img
                key={i}
                src={num}
                id={`num-${i + 1}-unit4`}
                className={`num-img ${
                  activeIndex === i || clickedIndex === i ? "active" : ""
                }`}
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
              style={{ height: "85vh" }}
            />
          </div>
        </div>
      </div>{" "}
     
    </>
  );
};

export default Unit4_Page1_Vocab;
