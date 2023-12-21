import React from "react";
import "./styles.css";
import Carousel from "react-elastic-carousel";

const LocationCard = ({ srcLink, countryName }) => {
  return (
    <div className="locations-card-container">
      <div className="locations-card-top-container"></div>
      <img src={srcLink} />
      <div className="locations-card-bottom-container">
        <h3>{countryName}</h3>
        <p
          className="loremText"
          style={{ color: "#181818", fontSize: "0.6rem", fontWeight: "400" }}
        >
          Lorem ipsum dolor sit amet, consectectur adipiscing elit morbi aliquam
          lorem ipsum dolor
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
