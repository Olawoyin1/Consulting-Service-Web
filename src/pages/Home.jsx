import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Test from '../components/Test'
import Offer from '../components/Offer'
import WhyUs from '../components/WhyUs'
import FAQ from '../components/FAQ'
import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/Testimonials'
import Statistics from '../components/Statistics'
import Mission from '../components/Mission'

const Home = () => {
  return (
    <div>
        <Hero />
        <Intro />
        <Mission />
        <WhyUs />
        <ServiceCard />
        <Statistics />
        <Testimonials />
        <FAQ />
    </div>
  )
}

export default Home