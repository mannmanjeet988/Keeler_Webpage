import React from 'react'
import "./styles.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 
import { FaChevronRight } from "react-icons/fa6";


const CardSecFour = ({text,srcLink}) => {
  return (
    <div className="card-4-container"> 
        <div className='top-container'>
            <img src={srcLink}/>
        </div>
        <div className='bottom-container' style={{ textAlign: "left" }}>
            <p className='sec-4date'>April 29,2022 - 2:00 PM</p>
            <h4 className='sec-4text' style={{textWrap:"wrap"}}>{text} </h4>
            <div className='arrow-container'>
               <a href="#">read more</a>
               {/* <span className='arrow-icon'><ArrowForwardIosIcon/></span> */}
               <span className='arrow-icon'><FaChevronRight/></span>
           </div>

        </div>
    </div>
  )
}

export default CardSecFour;