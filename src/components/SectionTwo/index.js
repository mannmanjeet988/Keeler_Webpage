import React from "react";
import "./styles.css";
import NewsCard from "./NewsCard";
import Carousel from "react-elastic-carousel";

const SectionTwo = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 640, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];
  return (
    <div className="wrapper" id="section-2">
      <div className="news-section-container">
        <p
          style={{
            color: "#ed6f1e",
            fontWeight: "500",
            marginBottom: "-0.5rem",
          }}
        >
          Blog & News
        </p>
        <h2>Get the inside scoop</h2>
        <div class="dot-pattern">
          <span style={{ backgroundColor: "#000000" }}></span>
          <span style={{ backgroundColor: "#606060" }}></span>
          <span style={{ backgroundColor: "#a8a8a8" }}></span>
          <span style={{ backgroundColor: "#cccccc" }}></span>
        </div>

        <div className="section-two-cards-container">
          <Carousel
            itemsToShow={2}
            breakPoints={breakPoints}
            pagination={false}
          >
            <NewsCard
              className="section-two-cards-inner-container"
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/08/A-Step-by-Step-Guide-on-How-to-Become-an-Optometrist.jpg"
              }
              newsName={"Getting Started"}
              newsDate={"March 29, 2023"}
              newsInfo={"A step-by-step guide on how to become an optometrist"}
            />
            <NewsCard
              className="section-two-cards-inner-container"
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/10/banner.jpg"
              }
              newsName={"Optometry, Slit Lamp, Keeler"}
              newsDate={"March 10, 2023"}
              newsInfo={
                "Smart phone adaptor for the Keeler Portable Slit Lamp (PSL)"
              }
            />
            <NewsCard
              className="section-two-cards-inner-container"
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/08/eye_drop_header.jpg"
              }
              newsName={"Getting Started"}
              newsDate={"April 15, 2023"}
              newsInfo={
                "Transforming Cataracts and Glaucoma Care: The Innovative Approach "
              }
            />

            <NewsCard
              className="section-two-cards-inner-container"
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/08/Untitled_design_22_.png"
              }
              newsName={"Slit Lamp, Keeler"}
              newsDate={"March 31, 2023"}
              newsInfo={"Unveiling the link between Diabetes and Eye health "}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
