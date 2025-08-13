'use client'

import { Box, Container, Heading, Text, VStack, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

export const AboutMe = () => {
  return (
    <>
      <Box as="section" id="about" py={12} bgGradient="linear(to-b, black, gray.900)">
        <Container maxW="container.xl" px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" textStyle="sectionHeading" p="4" mb="8" textAlign="center" bgGradient="to-r" gradientFrom="blue.vivid" gradientTo="white" bgClip="text">
              Hi, I&apos;m Ridha — A Web Developer and Backend Engineer.
            </Heading>

            {/* Profile Section */}
            <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={8} mb={16} alignItems="center" justifyContent="center">
              <GridItem>
                <VStack gap={6} align="center" textAlign="center" px={{ base: 4, md: 8 }}>
                  <Text textStyle="aboutContent" color="white" maxW="3xl">
                    {/* Graduated from Syiah Kuala University in 2025 with a GPA of 3.51, majoring in Informatics and specializing in Software Engineering. Skilled in UI/UX Design, Full-Stack Development, Web Development, as well as Application Testing. */}
                    Informatics graduate from Syiah Kuala University specializing in Software Engineering, with strong expertise in designing, developing, and deploying scalable web applications. Focused on delivering efficient, maintainable, and user-centered solutions through modern development practices.
                  </Text>

                  <Text textStyle="aboutContent" color="white" maxW="3xl">
                    {/* Driven by curiosity and a passion for continuous learning. Motivated to grow in dynamic environments that offer challenges and opportunities for development. Comfortable working both independently and in teams, even under tight deadlines and shifting priorities. */}
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