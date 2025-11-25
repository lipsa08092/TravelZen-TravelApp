import React from 'react'
import GallerySection from '../Screens/GallerySection'
import HeroSection from '../Screens/HeroSection'
import ContactSection from '../Screens/ContactSection'
import AboutSection from '../Screens/AboutSection'
import DestinationSection from '../Screens/DestinationSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <GallerySection/>
      <AboutSection/>
      <DestinationSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
