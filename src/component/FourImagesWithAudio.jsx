import React, { useState, useEffect, useRef } from "react";
import "./FourImagesWithAudio.css";
import { IoMdSettings } from "react-icons/io";
import { CgPlayPauseO } from "react-icons/cg";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import pauseBtn from "../assets/unit1/imgs/Right Video Button.svg";
const FourImagesWithAudio = ({
  images,
  audioSrc,
  checkpoints,
  popupOpen,
  titleQ,
  audioArr,
}) => {
  const audioRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0); // 0 = intro
  const [clickedIndex, setClickedIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showContinue, setShowContinue] = useState(false);
  const stopAtSecond = checkpoints[1] - 0.2;
  // إعدادات الصوت
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [activeSpeed, setActiveSpeed] = useState(1);
  const settingsRef = useRef(null);
  const [forceRender, setForceRender] = useState(0);
  // زر الكابشن
  const [isMuted, setIsMuted] = useState(false);

  const changeSpeed = (rate) => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = rate;
    setActiveSpeed(rate);
  };

  const playImageSound = (index) => {
    const sound = audioArr[index];
    if (sound) {
      setClickedIndex(index); // 🔥 فعل الأنيميشن

      sound.currentTime = 0;
      sound.play();

      sound.onended = () => {
        setClickedIndex(null); // 🔥 لما يخلص الصوت يشيل الأنيميشن
      };
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (popupOpen && audioRef.current) {
      setTimeout(() => audioRef.current.play(), 300);
    }

    audio.currentTime = 0;
    audio.play();

    const interval = setInterval(() => {
      if (audio.currentTime >= stopAtSecond) {
        audio.pause();
        setPaused(true);
        setShowContinue(true);
        clearInterval(interval);
      }
    }, 250);
    const handleTimeUpdate = () => {
      const time = audio.currentTime;
      let newIndex = 0;

      for (let i = 0; i < checkpoints.length; i++) {
        if (time >= checkpoints[i]) newIndex = i;
      }

      setCurrentIndex(newIndex);
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
  }, [checkpoints]);
  useEffect(() => {
    const timer = setInterval(() => {
      setForceRender((prev) => prev + 1);
    }, 1000); // كل ثانية

    return () => clearInterval(timer);
  }, []);
  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setPaused(false);
    } else {
      audio.pause();
      setPaused(true);
    }
  };
  return (
    <div className="four-wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "60%",
          alignItems: "flex-start",
        }}
      >
        <h5 className="header-title-page8" style={{ fontSize: "25px" }}>
          {images[0] && (
            <img src={images[0]} className="main-image" alt="main" />
          )}
          {titleQ}
        </h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: "0px 20px",
          position: "relative",
          width: "60%",
          alignItems: "flex-start",
        }}
      >
        <div className="audio-popup-vocab">
          <div className="audio-inner-vocab">
            {/* Play / Pause */}
            <button
              className="audio-play-btn"
              style={{ height: "30px", width: "30px" }}
              onClick={togglePlay}
            >
              {paused ? <FaPlay size={18} /> : <FaPause size={18} />}
            </button>

            {/* Slider */}
            <input
              type="range"
              min="0"
              max={audioRef.current?.duration || 0}
              value={audioRef.current?.currentTime || 0}
              className="audio-slider"
              onChange={(e) => {
                if (!audioRef.current) return;
                audioRef.current.currentTime = e.target.value;
              }}
            />

            {/* Current Time */}
            <span className="audio-time">
              {new Date((audioRef.current?.currentTime || 0) * 1000)
                .toISOString()
                .substring(14, 19)}
            </span>

            {/* Total Time */}
            <span className="audio-time">
              {new Date((audioRef.current?.duration || 0) * 1000)
                .toISOString()
                .substring(14, 19)}
            </span>

            {/* Mute */}
            <button
              className="mute-btn-outside"
              onClick={() => {
                audioRef.current.muted = !audioRef.current.muted;
                setIsMuted(!isMuted);
              }}
            >
              {audioRef.current?.muted ? (
                <FaVolumeMute size={22} color="#1d4f7b" />
              ) : (
                <FaVolumeUp size={22} color="#1d4f7b" />
              )}
            </button>
            <div className="settings-wrapper" ref={settingsRef}>
              <button
                className={`settings-btn ${showSettings ? "active" : ""}`}
                onClick={() => setShowSettings(!showSettings)}
              >
                <IoMdSettings size={22} color="#1d4f7b" />
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

                  <label>Speed</label>
                  <div className="speed-buttons">
                    {[0.75, 1, 1.25, 1.5].map((rate) => (
                      <button
                        key={rate}
                        className={`speed-rate ${
                          activeSpeed === rate ? "active" : ""
                        }`}
                        onClick={() => changeSpeed(rate)}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <audio ref={audioRef}>
          <source src={audioSrc} type="audio/mp3" />
        </audio>
      </div>

      <div className="images-layout">
        {/* الصور الصغيرة الثلاث */}
        <div className="small-images">
          {images.length <= 3 ? (
            <>
              {images.slice(1).map((src, i) => {
                const globalIndex = i + 1; // index 2,3,4
                return (
                  <div
                    key={i}
                    className={`small-box1 ${
                      currentIndex === globalIndex ||
                      clickedIndex === globalIndex
                        ? "active"
                        : ""
                    }`}
                  >
                    <img
                      src={src}
                      className="small-img1"
                      style={{ cursor: "pointer" }}
                      onClick={() => playImageSound(globalIndex)}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {images.slice(1).map((src, i) => {
                const globalIndex = i + 1; // index 2,3,4
                return (
                  <div
                    key={i}
                    className={`small-box2 ${
                      currentIndex === globalIndex ||
                      clickedIndex === globalIndex
                        ? "active"
                        : ""
                    }`}
                  >
                    <img
                      src={src}
                      className="small-img2"
                      style={{ cursor: "pointer" }}
                      onClick={() => playImageSound(globalIndex)}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      {showContinue && (
        <div className="action-buttons-container ">
          <button className="play-btn swal-continue" onClick={togglePlay}>
            {paused ? (
              <>
                Continue
                <svg width="20" height="20" viewBox="0 0 30 30">
                  <image href={pauseBtn} x="0" y="0" width="30" height="30" />
                </svg>
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

export default FourImagesWithAudio;
