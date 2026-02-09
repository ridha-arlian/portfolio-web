"use client"

import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import AnimatedBoxes from "@/app/utils/animated-boxes"
import { Box, Container, Heading, Button, HStack } from "@chakra-ui/react"

const MotionBox = motion.create(Box)

export const Hero = () => {
  return (
    <>
      <Box as="section" id="home" position="relative" height="100vh" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
        <AnimatedBoxes />
        <Container position="relative" zIndex={10} px={8} textAlign="center">
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Heading as="h1" textStyle="heroHeading" p={4} bgGradient={{ _dark: "headings" }} color={{ base: "greens.normal" }} bgClip={{ _dark: "text" }}>
               RIDHA ARLIAN — Software Engineer.
            </Heading>
            <Heading as="h2" textStyle="heroSubHeading" mb={8} color={{ base: "greens.texts", _dark: "white" }}>
              I design, code, and optimize.
            </Heading>
            <HStack gap={{ base: 1, sm: 4, md: 4, lg: 4, xl: 4 }} justify="center" flexWrap="wrap">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button textStyle="buttonHero1" bg={{ base: "earth.light", _dark: "blue.vivid" }} _hover={{ bg: { base: "earth.normal", _dark: "blue.hovers" } }}>
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button textStyle="buttonHero2" variant="outline" bg="transparent" borderColor={{ base: "earth.light", _dark: "white" }} color={{ base: "earth.light", _dark: "white" }} _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" }, color: { base: "earth.normal", _dark: "blue.hovers" } }} transition="all 0.3s">
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