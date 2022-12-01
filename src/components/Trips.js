import React from 'react'
import TripData from '../data/TripData'
import './Trips.css'
import TripsDataDetails from './TripsDataDetails'

const Trips = () => {
    const TripInfo = TripData.map((item)=>{
      return<TripsDataDetails 
        key={item.id}
        {...item}
      />
  })
  return (
    <div className='trip'>
        <div className='trip-heading'>
        <h1>
            Why do we use it
        </h1>
        <p>It is a long established fact that a reader will be distracted by the readable</p>
        </div>
        <div className='trip-card'>
        {TripInfo}
        </div>
    </div>
  )
}

export default Trips