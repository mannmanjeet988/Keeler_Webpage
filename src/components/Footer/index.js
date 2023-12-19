import React from "react";
import "./styles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="schools-container">
        <h2 class="styleh1">Schools Serviced by Keeler</h2>
        <div class="dot-pattern">
          <span style={{ backgroundColor: "#777777" }}></span>
          <span style={{ backgroundColor: "#9B9B9B" }}></span>
          <span style={{ backgroundColor: "#BFBFBF" }}></span>
          <span style={{ backgroundColor: "#D2D2D2" }}></span>
        </div>
        <div className="schools-img-container">
          <div className="school-img-div">
            <img src="https://www.keelerglobal.com/wp-content/uploads/2023/05/service1.png" />
          </div>
          <div className="school-img-div">
            <img src="https://www.keelerglobal.com/wp-content/uploads/2023/05/service2.png" />
          </div>
          <div className="school-img-div">
            <img src="https://www.keelerglobal.com/wp-content/uploads/2023/05/service3.png" />
          </div>
          <div className="school-img-div">
            <img src="https://www.keelerglobal.com/wp-content/uploads/2023/05/service4.png" />
          </div>
        </div>
        <div className="school-text">
          <span>
            <a href="#">Explore all schools</a>
          </span>
          <span className="arrow-icon">
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
