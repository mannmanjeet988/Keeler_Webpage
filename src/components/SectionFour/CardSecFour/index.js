import React from 'react'
import "./styles.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 


const CardSecFour = ({text,srcLink}) => {
  return (
    <div className="card-4-container"> 
        <div className='top-container'>
            <img src={srcLink}/>
        </div>
        <div className='bottom-container' style={{ textAlign: "left" }}>
            <p className='sec-4date'>April 29,2022 - 2:00 PM</p>
            <h4 className='sec-4text'>{text} </h4>
            <div className='arrow-container' style={{textAlign: "left" }}>
               <a href="#">read more</a>
               <span className='arrow-icon'><ArrowForwardIosIcon/></span>
           </div>

        </div>
    </div>
  )
}

export default CardSecFour;