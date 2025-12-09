import page_5 from "../../../assets/unit4/imgs/Right 1 Unit 04 Wonderful Shapes and Colors5.jpg";
import "./Unit4_Page5.css";
import audioBtn from "../../../assets/unit1/imgs/Page 01/Audio btn.svg";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
import pauseBtn from "../../../assets/unit1/imgs/Right Video Button.svg";
import Unit4_Page5_Q1 from "./Unit4_Page5_Q1";
import Unit4_Page5_Q2 from "./Unit4_Page5_Q2";
import Unit4_Page5_Q3 from "./Unit4_Page5_Q3";
import Unit4_Page5_Q4 from "./Unit4_Page5_Q4";

const Unit4_Page5 = ({ openPopup }) => {
  return (
    <div   className="page1-img-wrapper"
          // onClick={handleImageClick}
          style={{ backgroundImage: `url(${page_5})` }}>
      {/* <img src={page_5} /> */}

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
           openPopup("exercise", { startIndex: 31 })
        }
        className="click-icon-unit4-page5-1 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
          openPopup("exercise", { startIndex: 32 })
        }
        className="click-icon-unit4-page5-2  hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() =>
           openPopup("exercise", { startIndex: 33 })
        }
        className="click-icon-unit4-page5-3 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => openPopup("exercise", { startIndex: 34 })}
        className="click-icon-unit4-page5-4 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
    </div>
  );
};

export default Unit4_Page5;
