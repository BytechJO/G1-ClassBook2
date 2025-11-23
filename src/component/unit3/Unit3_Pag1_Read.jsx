
import Pg22_1_1_AdultLady from "../../assets/unit3/sound3/Pg22_1.1_Adult Lady.mp3";
import Pg22_1_2_AdultLady from "../../assets/unit3/sound3/Pg22_1.2_Adult Lady.mp3";
import Pg22_1_3_AdultLady from "../../assets/unit3/sound3/Pg22_1.3_Adult Lady.mp3";
import Pg22_1_4_AdultLady from "../../assets/unit3/sound3/Pg22_1.4_Adult Lady.mp3";
import img1 from "../../assets/img_unit2/imgs/b.svg";
import img2 from "../../assets/img_unit2/imgs/bird.svg";
import img3 from "../../assets/img_unit2/imgs/ball.svg";
import img4 from "../../assets/img_unit2/imgs/boy.svg";
import FourImagesWithAudio from "../FourImagesWithAudio";
import longAudio from "../../assets/unit1/sounds/pg4-instruction1-adult-lady_9KnGFLcl.mp3";
import Rabbit from "../../assets/img_unit2/imgs/Rabbit.svg";
const Unit3_Page1_Read = () => {
  const imageSounds = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(Pg22_1_1_AdultLady),
    new Audio(Pg22_1_2_AdultLady),
    new Audio(Pg22_1_3_AdultLady),
    new Audio(Pg22_1_4_AdultLady),
  ];
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];

  return (
    <>

         <FourImagesWithAudio
        images={[Rabbit, img1, img2, img3, img4]}
        audioSrc={longAudio}
        checkpoints={[0, 2.9, 3.4, 4.2, 5.1]}
        popupOpen={true}
        titleQ={"Listen and read along."}
        audioArr={imageSounds}
      />
    </>
  );
};

export default Unit3_Page1_Read;
