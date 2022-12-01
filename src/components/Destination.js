import React from 'react'
import './Destination.css'
import DestinationDetails from './DestinationDetails'
import DestinationData from '../data/DestinationData'
const Destination = () => {
  const DestinationInfo = DestinationData.map((item)=>{
    return<DestinationDetails 
      key={item.id}
      {...item}
    />
  })
  return (
    <div className='destination'>
    <div className='destination-details'>
        <h1>What is Lorem Ipsum</h1>
        <p>simply dummy text of the printing and typesetting</p>
    
    </div>
    <div>
      {DestinationInfo}
    </div>
        
  </div>
  )
}

export default Destination