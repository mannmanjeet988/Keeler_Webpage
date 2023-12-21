import React from "react";
import "./styles.css";

const CardSecThree = ({ text1, text2, text3, text4, state = false }) => {
  return (
    // {`grid-container ${
    //   coin.price_change_percentage_24h < 0 && "grid-container-red"
    // }`
    <div className="card-section-three">
      <div className={`date-conatiner ${state && "date-conatiner-active"}`}>
        <span id="top-number">{text1}</span>
        <span id="bottom-number">{text2}</span>
      </div>
      <div className="event-info-conatiner">
        <p>{text3}</p>
      </div>
    </div>
  );
};

export default CardSecThree;
