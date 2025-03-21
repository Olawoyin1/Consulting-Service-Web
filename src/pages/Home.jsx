import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Test from '../components/Test'
import Offer from '../components/Offer'
import WhyUs from '../components/WhyUs'
import FAQ from '../components/FAQ'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  return (
    <div>
        <Hero />
        <Intro />
        <ServiceCard />
        <WhyUs />
        <Offer />
        <FAQ />
    </div>
  )
}

export default Home