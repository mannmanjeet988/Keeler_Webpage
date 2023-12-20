import React from 'react'
import "./styles.css"
import Carousel from "react-elastic-carousel";


const LocationCard = ({srcLink,countryName}) => {
  return (
    <div className='locations-card-container'>
       <div className='locations-card-top-container'></div>
       <img src={srcLink}/>
       <div className='locations-card-bottom-container'>
        <h3>{countryName}</h3>
        <p style={{color:"darkgrey",fontSize:"0.8rem"}}>lorem ipsum dolor sit amet, consectectur adipiscing elit morbi aliquam lorem ipsum dolor</p>
       </div>
    </div>
  )
}

export default LocationCard