import AboutSection from '@/components/AboutUs'
import BlogSection from '@/components/BlogSection'
import ConsultationSection from '@/components/ConsultationSection'
import Home from '@/components/Home'
import ProcessSteps from '@/components/ProcessSteps'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'

import React from 'react'

function page() {
  return (
    <>
      <Home />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs /> 
      <ProcessSteps />
      <ConsultationSection/>
      <BlogSection />
      

    </>
  )
}

export default page
