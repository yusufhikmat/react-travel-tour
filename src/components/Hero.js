import React from 'react'
import './Hero.css'
const Hero = (props) => {
  return (
    <div className='hero'>
    <div className=''>
        <img src={props.heroImg} alt='nature' className='hero-nature'/>
    </div>
    <div className='hero-text'>
        <h1 className='hero-heading'>{props.heading}</h1>
        <p className='hero-paragraph'>{props.paragraph}</p>
        <a href={props.url} className={props.btnLink}>{props.linkText}</a>
    </div>
    </div>

  )
}

export default Hero