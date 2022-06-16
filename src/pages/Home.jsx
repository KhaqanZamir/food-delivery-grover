import React from 'react'
import HeroSection from '../components/home/HeroSection'
import HomeDelivery from '../components/home/HomeDelivery'
import WhatWeServe from '../components/home/WhatWeServe'
import WhyChooseUs from '../components/home/WhyChooseUs'

const Home = () => {
  return (
      <>
        <HeroSection/>
        <WhatWeServe/>
        <WhyChooseUs/>
        <HomeDelivery/>
      </>
  )
}

export default Home