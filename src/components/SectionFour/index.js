import React from 'react'
import "./styles.css"
import CardSecFour from './CardSecFour'

const SectionFour = () => {
  return (
    <div className='wrapper' id="sec-four">
        <h1>Keeler Webinars</h1>
        <div class="dot-pattern">
          <span style={{ backgroundColor: "#777777" }}></span>
          <span style={{ backgroundColor: "#9B9B9B" }}></span>
          <span style={{ backgroundColor: "#BFBFBF" }}></span>
          <span style={{ backgroundColor: "#D2D2D2" }}></span>
        </div>
        <div className='sec4-card-container'>
           <div className='sec4-card-container-innerDiv'>
           <CardSecFour 
           srcLink="https://www.keelerglobal.com/wp-content/uploads/2023/08/eye_drop_header.jpg" 
           text={"Explaining the concept of SMART Goals (Specific, Measurable,Attainable,Relevant,Time-bound) and how to apply it "} 
            />
           </div>
           <div className='sec4-card-container-innerDiv'>
           <CardSecFour srcLink="https://www.keelerglobal.com/wp-content/uploads/2023/02/bio_maintenance.jpg" 
           text={"Setting SMART Goals: How to Define and Priortize Your Objectives"}
           />
           </div>
        </div>
        
        <button className='sec-4-btn'>Explore All Webinars</button>
    </div>
  )
}

export default SectionFour