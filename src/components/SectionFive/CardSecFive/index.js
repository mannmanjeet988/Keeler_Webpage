import React from "react";
import "./styles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaChevronRight } from "react-icons/fa6";

const CardSecFive = ({ text1, text2, text3, srcLink }) => {
  return (
    <div className="cardsec5">
      <div className="left-container">
        
        <img src={srcLink} alt="sec5Image" />
      </div>
      <div className="right-container">
        <div className="cardsec-5-text-container">
          <h4>{text1}</h4>
        </div>
        {/* <h4>{text2}</h4> */}
        <div className="arrow-container">
          <span>
            {" "}
            <a id="sec5AnchorTag" href="#">
              {text3}
            </a>
          </span>
          {/* <span className='arrow-icon'><ArrowForwardIosIcon/></span> */}
          <span className="arrow-icon">
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSecFive;
