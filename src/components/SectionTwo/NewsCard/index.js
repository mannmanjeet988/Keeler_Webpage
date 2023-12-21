import React from "react";
import "./styles.css";

const NewsCard = ({ srcLink, newsName, newsDate, newsInfo }) => {
  return (
    <div className="newscardContainer">
      <div className="newsCard-top-container">
        <img src={srcLink} />
      </div>
      <div className="newsCard-bottom-container">
        <div
          className="newsCard-date-container"
          style={{ textAlign: "left", marginBottom: "-0.4rem" }}
        >
          <span
            className="newsName"
            style={{ fontSize: "0.6rem", color: "#1b82e6", fontWeight: "500" }}
          >
            {newsName}
          </span>
          <span style={{ color: "#999999" }}>|</span>
          <span
            className="newsDate"
            style={{ fontSize: "0.6rem", color: "#333333", fontWeight: "500" }}
          >
            {newsDate}
          </span>
        </div>
        <div>
          <p style={{ fontSize: "1rem", fontWeight: "600" }}>{newsInfo}</p>
        </div>
        <div>
          <p className="director-name">
            By Mathew Schwartz, Founder & Executive Director
          </p>
        </div>
        <div>
          <button style={{ padding: "0.4rem 1.6rem", marginTop: "0.3rem" }}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
