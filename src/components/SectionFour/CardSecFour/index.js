import React from "react";
import "./styles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaChevronRight } from "react-icons/fa6";

const CardSecFour = ({ text, srcLink }) => {
  return (
    <div className="card-4-container">
      <div className="top-container">
      <iframe width="100%" height="315" src={srcLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="bottom-container" style={{ textAlign: "left" }}>
        <div>
          <p className="sec-4date">April 29,2022 - 2:00 PM</p>
        </div>
        <div className="sec-4text-container">
          <p className="sec-4text">{text} </p>
        </div>
        <div className="arrow-container">
          <a href="#">read more</a>

          <span className="arrow-icon">
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSecFour;
