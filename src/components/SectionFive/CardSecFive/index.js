import React from 'react'
import "./styles.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 


const CardSecFive = ({text1,text2,text3,srcLink}) => {
  return (
    <div className='cardsec5'>
       <div className='left-container'>
        {/* <img src="https://www.keelerusa.com/media/wysiwyg/theme/distributor.webp" alt="sec5Image" /> */}
        <img src={srcLink} alt="sec5Image"/>
       </div>
       <div className='right-container'>
            <h4>{text1}</h4>
            <h4>{text2}</h4>
           <div className='arrow-container'>
               <a id="sec5AnchorTag" href="#">{text3}</a>
               <span className='arrow-icon'><ArrowForwardIosIcon/></span>
           </div>
       </div>
    </div>
  )
}

export default CardSecFive;