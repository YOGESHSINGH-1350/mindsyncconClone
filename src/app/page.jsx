import AboutSection from '@/components/AboutSection'
import BlogSection from '@/components/BlogSection'
import ConsultationSection from '@/components/ConsultationSection'
import Home from '@/components/Home'
import CircularScrollProgress from '@/components/CircularScrollProgress'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/ChooseUs'
import ProcessSteps from '@/components/ProcessSteps'

import React from 'react'

function page() {
  return (
    <>
      <Home />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs /> 
      <ProcessSteps />
      <CircularScrollProgress />
      <ConsultationSection/>
      <BlogSection />
      

    </>
  )
}

export default page
