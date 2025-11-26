import React from 'react'
import GallerySection from '../Screens/GallerySection'
import HeroSection from '../Screens/HeroSection'
import ContactSection from '../Screens/ContactSection'
import AboutSection from '../Screens/AboutSection'
import DestinationSection from '../Screens/DestinationSection'
import TestimonialSection from '../Screens/TestimonialSection'

function Home() {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection/>
      <GallerySection/>
      <AboutSection/>
      <DestinationSection/>
      <TestimonialSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
