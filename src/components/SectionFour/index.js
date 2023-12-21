import React from "react";
import "./styles.css";
import CardSecFour from "./CardSecFour";

const SectionFour = () => {
  return (
    <div className="wrapper" id="sec-four">
      <h2>Keeler Webinars</h2>
      <div class="dot-pattern">
        <span style={{ backgroundColor: "#000000" }}></span>
        <span style={{ backgroundColor: "#606060" }}></span>
        <span style={{ backgroundColor: "#a8a8a8" }}></span>
        <span style={{ backgroundColor: "#cccccc" }}></span>
      </div>
      <div className="sec4-card-container">
        <div className="sec4-card-container-innerDiv">
          <CardSecFour
            srcLink="https://www.youtube.com/embed/Rp9JOqJ3dew?si=7O61mYcrXgGfH4vs"
           
             text={
              "Explaining the concept of SMART Goals: Specific, Measurable, Attainable, Time-bound and how to apply it"
            }
          />
        </div>
        <div className="sec4-card-container-innerDiv">
          <CardSecFour
            srcLink="https://www.youtube.com/embed/VLcYYGd0q6E?si=AmYwfeDy5ihBzZBW" title="YouTube video player"
            text={
              "Setting SMART Goals: How to Define and Priortize Your Objectives"
            }
          />
        </div>
      </div>

      <button className="sec-4-btn">Explore All Webinars</button>
    </div>
  );
};

export default SectionFour;
