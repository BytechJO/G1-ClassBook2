import React, { useState, useRef, useEffect } from "react";
import listenSound from "../../assets/unit3/sound3/Pg22.Instruction1_Adult Lady.mp3";
import listenImg from "../../assets/unit3/imgs3/readimg_p1_Unit3.jpg";
import Pg22_1_1_AdultLady from "../../assets/unit3/sound3/Pg22_1.1_Adult Lady.mp3";
import Pg22_1_2_AdultLady from "../../assets/unit3/sound3/Pg22_1.2_Adult Lady.mp3";
import Pg22_1_3_AdultLady from "../../assets/unit3/sound3/Pg22_1.3_Adult Lady.mp3";
import Pg22_1_4_AdultLady from "../../assets/unit3/sound3/Pg22_1.4_Adult Lady.mp3";

const Unit3_Page1_Read = () => {
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
    { x1: 18.2, y1: 48.0, x2: 33.9, y2: 62.5, sound: Pg22_1_1_AdultLady },
    { x1: 33.7, y1: 37.0, x2: 43.14, y2: 74.0, sound: Pg22_1_2_AdultLady },
    { x1: 53.0, y1: 37.0, x2: 66.0, y2: 74.0, sound: Pg22_1_3_AdultLady },
    { x1: 74.0, y1: 37.0, x2: 88.0, y2: 74.0, sound: Pg22_1_4_AdultLady },
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
          style={{ height: "auto",width:"600px"}}
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

export default Unit3_Page1_Read;
