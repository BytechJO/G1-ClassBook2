import React, { useState, useRef, useEffect } from "react";
import listenSound from "../../assets/img_unit2/sounds-unit2/Pg10_Instruction1_Adult Lady.mp3";
import listenImg from "../../assets/img_unit2/imgs/read_page1.jpg";
import bird from "../../assets/img_unit2/sounds-unit2/Pg10_1.2_Adult Lady.mp3";
import ball from "../../assets/img_unit2/sounds-unit2/Pg10_1.3_Adult Lady.mp3";
import boy from "../../assets/img_unit2/sounds-unit2/Pg10_1.4_Adult Lady.mp3";
import bSound from "../../assets/img_unit2/sounds-unit2/Pg10_1.1_Adult Lady.mp3";

const Unit2_Page1_Read = () => {
  const [activePopup, setActivePopup] = useState(null);

  const audioRef = useRef(null);
   const introRef = useRef(null);
  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

    checkAreaAndPlaySound(xPercent, yPercent);
  };

  const clickableAreas = [
    { x1: 15.9, y1: 43.9, x2: 21.4, y2: 58.0, sound: bSound },
    { x1: 31.4, y1: 35.0, x2: 42.14, y2: 69.0, sound: bird },
    { x1: 52.0, y1: 35.0, x2: 64.0, y2: 69.0, sound: ball },
    { x1: 72.0, y1: 35.0, x2: 85.0, y2: 69.0, sound: boy },
    ,
  ];
  const checkAreaAndPlaySound = (x, y) => {
    console.log("hi");

    const area = clickableAreas.find(
      (a) => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
    );

    console.log("Matched Area:", area);

    if (area) playSound(area.sound);
  };
  const playSound = (soundPath) => {
    console.log(soundPath);
    if (audioRef.current) {
      audioRef.current.src = soundPath;
      audioRef.current.play();
    }
  };
  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);

  return (
    <>
  <div>
        <audio ref={introRef} autoPlay style={{ display: "none" }}>
          <source src={listenSound} type="audio/mp3" />
        </audio>

        <img
          src={listenImg}
          style={{ height: "auto"}}
          onClick={handleImageClick}
        />
        <audio ref={audioRef} style={{ display: "none" }} />

        {clickableAreas.map((area, index) => (
          <div
            key={index}
            className="clickable-area"
            style={{
              left: `${area.x1}%`,
              top: `${area.y1}%`,
              width: `${area.x2 - area.x1}%`,
              height: `${area.y2 - area.y1}%`,
            }}
            onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
            onClick={() => playSound(area.sound)}
          ></div>
        ))}
     </div>
    </>
  );
};

export default Unit2_Page1_Read;
