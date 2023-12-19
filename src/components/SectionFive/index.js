import React from "react";
import "./styles.css";
import CardSecFive from "./CardSecFive";

const SectionFive = () => {
  return (
    <div className="wrapper">
      <div className="sec-5-container">
        <div className="sec-5-left-container">
          <h2 style={{ textAlign: "left" }}>Keeler Support</h2>
          <p style={{ textAlign: "left" }}>
            Learn about Keeler products,view online manuals,explore frequently
            asked questions, and more.Get service,support, and professional
            advice from Keeler.
          </p>
          <CardSecFive
            srcLink="https://www.keelerglobal.com/wp-content/uploads/2023/05/support1.png"
            text1={"Return Your Product"}
            text2={"For Repair"}
            text3={"Fill the Form"}
          />
          <hr />
          <CardSecFive
            srcLink="https://www.keelerglobal.com/wp-content/uploads/2023/05/support2.png"
            text1={"Browse Product"}
            text2={"Manuals"}
            text3={"Get User Manuals"}
          />
          <hr />
          <CardSecFive
            srcLink="https://www.keelerglobal.com/wp-content/uploads/2023/05/support3.png"
            text1={"Contact Technical"}
            text2={"Service"}
            text3={"Get in touch"}
          />
        </div>

        <div className="sec-5-right-container">
          <h2 style={{ textAlign: "left" }}>Find Distributors</h2>
          <img
            className="distributor-img"
            src="https://www.keelerglobal.com/wp-content/uploads/2023/05/map.png"
          />
          <button className="sec5-btn">Search Now</button>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
