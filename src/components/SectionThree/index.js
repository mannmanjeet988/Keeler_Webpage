import React from "react";
import "./styles.css";
import CardSecThree from "./CardSecThree";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";

const SectionThree = () => {
  return (
    <div className="wrapper" id="section-three">
      <h2 className="keeler-events-h2" style={{ textAlign: "left" }}>Keeler Events</h2>
      <div className="section-three-conatiner">
        <div className="left-container">
          <div className="eventsLeftCard">
            <div className="eventsCard-left-container">
              <img
                src="https://www.keelerglobal.com/wp-content/uploads/2023/08/Untitled_design_22_.png"
                alt="sec3Image"
              />
            </div>
            <div className="eventsCard-right-container">
              <p className="eventsCardDate">01 Jan,2023</p>
              <h4>
                Gratitude Practices: How Cultivating a Thankful Attitude Can
                Change Your Life
              </h4>

              <div id="sec-3-anchor-tag-container">
                <span>
                  <a href="#">Watch Now</a>
                </span>
                <span id="sec-3-arrowIcon" className="arrow-icon">
                  <FaChevronRight />
                </span>
              </div>
              <div id="sec-3-arrowscontainer">
                <span id="sec-3-arrowIcon" className="arrow-icon">
                  <FaChevronLeft />
                </span>
                <span id="sec-3-arrowIcon" className="arrow-icon">
                  <FaChevronRight />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="events-container">
            <div className="eventsHeading">
              <p style={{textAlign:"center"}} className="upcomingEventsHeading">Upcoming Events</p>
            </div>

            <div>
              <CardSecThree
                text1={"09"}
                text2={"Feb"}
                text3={
                  "The importance of Self-Care in Maintaining a Positive Mindset"
                }
                state={true}
              />
            </div>
            <div>
              <CardSecThree
                text1={"20"}
                text2={"Jan"}
                text3={
                  "Creating a daily Positive Routine: Simple Steps for making positivity a Habit"
                }
              />
            </div>
            <div>
              <CardSecThree
                text1={"18"}
                text2={"Mar"}
                text3={
                  "Surrounding Yourself with Positivity: Strategies for Building a Supportive Network"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
