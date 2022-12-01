import React from 'react'
import './Destination.css'
const DestinationDetails = (props) => {
  return (
        <div className={props.className}>
        <div className='destination-text'>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
        </div>
        <div className='destination-img'>
            <img src={props.image1} alt='nature' />
            <img src={props.image2} alt='nature' />
        </div>
    </div>
  )
}

export default DestinationDetails