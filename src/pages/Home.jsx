import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import WhyUs from '../components/WhyUs'
import FAQ from '../components/FAQ'
import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/Testimonials'
import Statistics from '../components/Statistics'
import Mission from '../components/Mission'
import ContactUs from '../components/ContactUs'

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
        <ContactUs />
    </div>
  )
}

export default Home