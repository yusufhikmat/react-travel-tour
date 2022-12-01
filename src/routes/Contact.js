import React from 'react'
import Navbar from '../components/Navbar'
import AboutImage from '../images/nature4.jpg'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
        <>
        <Navbar />
         <Hero 
            heroImg={AboutImage}
            heading ='Contact'
            
         />
         <ContactForm />
         <Footer />
    </>
  )
}

export default Contact