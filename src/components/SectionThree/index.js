import React from "react";
import "./styles.css";
import CardSecThree from "./CardSecThree";

const SectionThree = () => {
  return (
    <div className="wrapper" id="section-three">
      <h2 style={{ textAlign: "left" }}>Keeler Events</h2>
      <div className="section-three-conatiner">
        <div className="left-container">
          <h1>Left</h1>
        </div>
        <div className="right-container">
          <div className="events-container">
            <div className="eventsHeading">
              <p>Upcoming Events</p>
            </div>

            <div>
            <CardSecThree
              text1={"09"}
              text2={"Feb"}
              text3={"The importance of Self-Care in Maintaining a Positive Mindset"}
             
              state={true}
            />
            </div>
            <div>
            <CardSecThree
              text1={"20"}
              text2={"Jan"}
              text3={"Creating a daily Positive Routine: Simple Steps for making positivity a Habit"}
              
            />
            </div>
            <div>
            <CardSecThree
              text1={"18"}
              text2={"Mar"}
              text3={"Surrounding Yourself with Positivity: Strategies for Building a Positive Network"}
              
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
