import React from "react";
import "./styles.css";

const NewsCard = ({ srcLink, newsName, newsDate, newsInfo }) => {
  return (
    <div className="newscardContainer">
      <div className="newsCard-top-container">
        <img src={srcLink} />
      </div>
      <div className="newsCard-bottom-container">
        <div className="newsCard-date-container">
          <span>{newsName}</span>
          <span>|</span>
          <span>{newsDate}</span>
        </div>
        <div><h3>{newsInfo}</h3></div>
        <div>
          <p>By Mathew Schwartz, Founder & Executive Director</p>
        </div>
        <div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
