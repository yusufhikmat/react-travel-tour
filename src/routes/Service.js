import React from 'react'
import Navbar from '../components/Navbar'
import AboutImage from '../images/nature3.jpg'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Destination from '../components/Destination'
const Service = () => {
  return (
        <>
        <Navbar />
         <Hero 
            heroImg={AboutImage}
            heading ='Service'
            
         />
         <Destination />
         <Footer />
    </>
  )
}

export default Service