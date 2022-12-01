import React from 'react'

const TripsDataDetails = (props) => {
     
  return (
        <div className='trip-card-details'>
        <div>
            <img src={props.img} alt='nature' className='trip-img'/>
        </div>
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        </div>
    
  )
}

export default TripsDataDetails