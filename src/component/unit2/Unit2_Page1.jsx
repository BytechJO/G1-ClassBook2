import page_1 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday.jpg";
import "./Unit2_Page1.css";
import unit2_page1_CD8 from "../../assets/img_unit2/sounds-unit2/CD8.Pg10_U2.Intro_Adult Lady.mp3";
import Unit2_Page1_find from "./Unit2_Page1_find";
import Unit2_Page1_Vocab from "./Unit2_Page1_Vocab";
import Unit2_Page1_Read from "./Unit2_Pag1_Read";
import AudioWithCaption from "../AudioWithCaption";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";

const Unit2_Page1 = ({ openPopup }) => {
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];
  return (
    <div className="unit2-page-background">
      <img src={page_1} />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup(
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <AudioWithCaption
                src={unit2_page1_CD8}
                captions={captionsExample}
              />
            </div>,
            true
          )
        }
        className="headset-icon-CD-unit2-page1-1 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup(
            <>
              <Unit2_Page1_find />
            </>,
            false
          )
        }
        className="click-icon-unit2-page1-1 hover:scale-110 transition"
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
              <Unit2_Page1_Vocab />
            </>,
            false
          )
        }
        className="headset-icon-CD-unit2-page1-2 hover:scale-110 transition"
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
              <Unit2_Page1_Read />
            </>,
            false
          )
        }
        className="click-icon-unit2-page1-2 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
    </div>
  );
};

export default Unit2_Page1;
