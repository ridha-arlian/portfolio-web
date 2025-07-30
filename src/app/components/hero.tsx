'use client'

import { Box, Container, Heading, Button,HStack, } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import AnimatedBoxes from '@/app/utils/animated-boxes'

const MotionBox = motion.create(Box)

export const Hero = () => {
  return (
    <>
      <Box as="section" id="home" position="relative" height="100vh" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
        <AnimatedBoxes />
        <Container position="relative" zIndex={10} px={4} textAlign="center">
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={4} bgGradient="linear(to-r, brand.400, pink.500, red.500)" bgClip="text">
              Hey! It`&apos;`s Aakash Singh Rajput
            </Heading>
            <Heading as="h2" size={{ base: "md", md: "lg" }} mb={8} color="gray.300">
              🚀 Blockchain Innovator | Full-Stack Developer | Tech Explorer
            </Heading>
            <HStack gap={4} justify="center" flexWrap="wrap">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button size="lg" bgGradient="linear(to-r, brand.500, pink.500)" _hover={{ bgGradient: "linear(to-r, brand.600, pink.600)" }} color="white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button size="lg" variant="outline" bg="transparent" borderColor="brand.500" color="white" _hover={{ bg: "brand.500", color: "white" }} transition="all 0.3s">
                  Contact Me
                </Button>
              </ScrollLink>
            </HStack>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}