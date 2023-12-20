import React from "react";
import "./styles.css";
import NewsCard from "./NewsCard";
import Carousel from "react-elastic-carousel";

const SectionTwo = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];
  return (
    <div className="wrapper" id="section-2">
      <div className="news-section-container">
        <h4 style={{ color: "tomato" }}>Blog & News</h4>
        <h2>Get the inside scoop</h2>
       
          <div className="section-two-cards-container">
          <Carousel itemsToShow={2} breakPoints={breakPoints}>
          <NewsCard
              className="section-two-cards-inner-container"
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/10/banner.jpg"
              }
              newsName={"Getting Started"}
              newsDate={"March 29, 2023"}
              newsInfo={"A step-by-step guide on how to become an optometrist"}
            />
            <NewsCard
              className="section-two-cards-inner-container"
              srcLink={
                "https://www.keelerglobal.com/wp-content/uploads/2023/08/eye_drop_header.jpg"
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
                "https://www.keelerglobal.com/wp-content/uploads/2023/08/A-Step-by-Step-Guide-on-How-to-Become-an-Optometrist.jpg"
              }
              newsName={"Slit Lamp, Keeler"}
              newsDate={"April 15, 2023"}
              newsInfo={
                "Transforming Cataracts and Glaucoma Care "
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
