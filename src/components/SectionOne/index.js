import React from "react";
import "./styles.css";
import LocationCard from "./LocationCard";
import { FaChevronRight } from "react-icons/fa6";
import Carousel from "react-elastic-carousel";

export const SectionOne = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 640, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 3 },
  ];
  return (
    <div className="wrapper" id="section-1">
      <div className="locations-container">
        <h2 style={{ textAlign: "left", paddingLeft: "4rem" }}>
          Keeler Countries
        </h2>
        <div className="locations-inner-container">
          <Carousel
            itemsToShow={3}
            breakPoints={breakPoints}
            pagination={false}
          >
            <LocationCard
              className="locations-inner-container"
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/05/USA.jpg"
              }
              countryName={"Keeler USA"}
            />
            <LocationCard
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/05/UK.jpg"
              }
              countryName={"Keeler UK"}
            />
            <LocationCard
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/05/germany.jpg"
              }
              countryName={"Keeler Germany"}
            />
            <LocationCard
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/05/france.jpg"
              }
              countryName={"Keeler France"}
            />
            <LocationCard
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/05/Italy.jpg"
              }
              countryName={"Keeler Italy"}
            />
            <LocationCard
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/05/spain.jpg"
              }
              countryName={"Keeler Spain"}
            />
          </Carousel>
        </div>

        <div className="arrow-container">
          <span>
            <a href="#">Explore All Companies</a>
          </span>
          <span className="arrow-icon">
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};
