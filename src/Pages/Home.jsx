import React from 'react'
import GallerySection from '../Screens/GallerySection'
import HeroSection from '../Screens/HeroSection'
import ContactSection from '../Screens/ContactSection'
import AboutSection from '../Screens/AboutSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <GallerySection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
