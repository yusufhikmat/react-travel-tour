import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trips from '../components/Trips'
import AboutImage from '../images/nature2.jpg'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero 
            heroImg={AboutImage}
            heading ='About'
            
         />
    <Trips />
    <Footer />
    </>
    
  )
}

export default About