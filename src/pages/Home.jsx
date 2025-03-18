import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Test from '../components/Test'
import Offer from '../components/Offer'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <div>
        <Hero />
        {/* <Test /> */}
        <Intro />
        <WhyUs />
        <Offer />
    </div>
  )
}

export default Home