import React from 'react'
import "./styles.css"

const CardSecThree = ({text1,text2,text3,text4, state=false}) => {
  return (
    <div className='card-section-three'>
        <div className="date-conatiner" >
            <span id="top-number">{text1}</span>
            <span id="bottom-number">{text2}</span>
        </div>
        <div className='event-info-conatiner'>
             <span>{text3}</span>
             <span>{text4}</span>
        </div>


    </div>
  )
}

export default CardSecThree