'use client'

import type React from 'react'
import { Box } from '@chakra-ui/react'
import { Navbar } from '@/app/components/navbar'
import { AboutMe } from '@/app/components/about'
// import { Services } from '@/app/components/services'
import { Projects } from '@/app/components/projects'
import { Contacts } from '@/app/components/contacts'
import { Hero } from '@/app/components/hero'
import { Footer } from '@/app/components/footer'
import { Skills } from '@/app/components/skills'
import { Timelines } from '@/app/components/timelines'

export default function Home() {
  return (
    <>
      <Box minH="100vh" bg="background" overflow="hidden">
        
        {/* Navbar */}
        <Navbar/>

        {/* Hero Section */}
        <Hero/>

        {/* About Section */}
        <AboutMe/>

        {/* Skills Section */}
        <Skills/>

        {/* Timelines Section */}
        <Timelines/>

        {/* Services Section */}
        {/* <Services/> */}

        {/* Projects Section */}
        <Projects/>

        {/* Contact Section */}
        <Contacts/>

        {/* Footer Section*/}
        <Footer/>

      </Box>
    </>
  )
}