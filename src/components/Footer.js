import React from 'react'
import './Footer.css';
import FooterData from '../data/FooterData';
import FooterDetails from './FooterDetails';
const Footer = () => {
const FooterInfo = FooterData.map((item)=>{
    return <FooterDetails 
        key={item.id}
        {...item}
    />
})
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div >
                <h1>Trippy</h1>
                <p>Choose your favourite destination</p>
            </div>
            <div>
            <p>
                We are happy people
            </p>
            </div>
        </div>
        <div className='footer-bottom'>
            {FooterInfo}
        </div>
    </div>
  )
}

export default Footer