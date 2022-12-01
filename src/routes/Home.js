import React from 'react'
import Destination from '../components/Destination'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trips from '../components/Trips'
import HomeImage from '../images/nature1.jpg'
import Footer from '../components/Footer'
const Home = () => {
 
  return (
    <>
    <Navbar />
    <Hero 
      heroImg={HomeImage}
            heading ='Your Jorney Your Story'
            paragraph ='Choose Your Favourite Destination'
            btnLink ='show'
            linkText = 'Travel tour'
            url='/'
    />
    <Destination/>
    <Trips  />
    <Footer />
    
    </>

  )
}

export default Home