"use client"

import { motion } from "framer-motion"
import { Box, Container, Heading, Text, VStack, Grid, GridItem } from "@chakra-ui/react"

const MotionBox = motion.create(Box)

export const AboutMe = () => {
  return (
    <>
      <Box as="section" id="about" py={12}>
        <Container maxW="container.xl" px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" textStyle="sectionHeading" p={4} mb={8} textAlign="center" bgGradient={{ _dark: "headings" }} color={{ base: "greens.normal" }} bgClip={{ _dark: "text" }}>
              Hi, I&apos;m Ridha — A Web Developer and Backend Engineer.
            </Heading>

            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={8} mb={16} alignItems="center" justifyContent="center">
              <GridItem>
                <VStack gap={6} align="center" textAlign="center" px={{ base: 4, md: 8 }}>
                  <Text textStyle="aboutContent" color={{ base: "greens.texts", _dark: "white" }} maxW="3xl">
                    Informatics graduate from Syiah Kuala University specializing in Software Engineering, with strong expertise in designing, developing, and deploying scalable web applications. Focused on delivering efficient, maintainable, and user-centered solutions through modern development practices.
                  </Text>

                  <Text textStyle="aboutContent" color={{ base: "greens.texts", _dark: "white" }} maxW="3xl">
                    Proficient in frontend development with React and Next.js, and backend development using PHP (Laravel), Python (Django), and TypeScript/JavaScript (Node.js). Experienced in RESTful API design, database management, and implementing real-time communication with WebRTC and mediasoup. Capable of working effectively both independently and in collaborative team environments.
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}