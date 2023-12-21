import React from "react";
import "./styles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="schools-container">
        <h2 style={{ marginBottom: "-0.5rem" }}>Schools Serviced by Keeler</h2>
        <div class="dot-pattern">
          <span style={{ backgroundColor: "#000000" }}></span>
          <span style={{ backgroundColor: "#606060" }}></span>
          <span style={{ backgroundColor: "#a8a8a8" }}></span>
          <span style={{ backgroundColor: "#cccccc" }}></span>
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
        <div className="arrow-container">
          <span>
            <a href="#">Explore All Schools</a>
          </span>

          <span className="arrow-icon">
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
