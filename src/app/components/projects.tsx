"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projectsData } from "@/app/data/projects"
import { ArrowBigRightIcon, ArrowBigLeftIcon } from "lucide-react"
import { Box, Container, Heading, Text, Flex, Badge, Image, Link, Button } from "@chakra-ui/react"

const MotionBox = motion.create(Box)

function ProjectCard({ title, description, tags, url }: { title: string, description: string, tags: string[], url?: string }) {
  return (
    <>
      <Box p={{ base: 4, sm: 6, md: 6, lg: 6, xl: 6 }} borderRadius="lg" bg={{ base: "whites.cards", _dark: "blackAlpha.500" }} border="1px solid" borderColor={{ base: "earth.normal", _dark: "gray.800" }} w="full" maxW="lg" mx="auto">
        {url && (
          <Link href={ url } display="block" overflow="hidden" borderRadius="md" border="1px solid" borderColor={{ base: "earth.normal", _dark: "gray.800" }} mb={4}>
            <Image src={ `https://image.thum.io/get/width/800/crop/768/${url}` } alt={ title } w="full" h="180px" objectFit="cover"/>
          </Link>
        )}
        
        <Heading as="h3" textStyle="titleProjects" mb={3} pb={1} textAlign="center" bgGradient={{ _dark: "headings" }} color={{ base: "greens.normal" }} bgClip={{ _dark: "text" }}>
          { title }
        </Heading>
        
        <Text color={{ base: "greens.texts", _dark: "white" }} textStyle="descProjects" mb={4} textAlign="center">
          { description }
        </Text>
        
        <Flex flexWrap="wrap" justify="center" gap={1}>
          {tags.map((tag, i) => (
            <Badge key={i} px={{ base: 2, sm: 3, md: 3, lg: 3, xl: 3 }} py={1} textStyle="badgeProjects" borderRadius="full" bg={{ base: "whites.badges", _dark: "whiteAlpha.100" }} color={{ base: "greens.texts", _dark: "white" }} _hover={{ color:{ base: "earth.normal", _dark: "blue.vivid" }, borderColor: { base: "earth.normal", _dark: "blue.vivid" } }} border="1px solid" borderColor={{ base: "earth.normal", _dark: "gray.800" }}>
              { tag }
            </Badge>
          ))}
        </Flex>
      </Box>
    </>
  )
}

export const Projects = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
  }

  const next = () => {
    setCurrent((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <Box as="section" id="work" py={20}>
        <Container maxW="container.md" px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" textStyle="sectionHeading" pb={4} textAlign="center" bgGradient={{ _dark: "headings" }} color={{ base: "greens.normal" }} bgClip={{ _dark: "text" }}>
              Project Showcase
            </Heading>
            <Text as="h3" textStyle="sectionSubHeading" mb={8} textAlign="center" color={{ base: "greens.texts", _dark: "white" }}>
              Selected work that showcases my development capabilities.
            </Text>
            <Flex direction="column" align="center" position="relative">
              
              <Button aria-label="Previous" size="lg" onClick={ prev } variant="ghost" color={{ base: "black", _dark: "white" }} bg="inherit" _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" } }} position="absolute" left={0} top="50%" transform="translateY(-50%)" display={{ base: "none", md: "flex" }} zIndex={1}>
                <ArrowBigLeftIcon />
              </Button>

              <Box w="full" maxW="lg" mx="auto" h={{ base: "430px", md: "430px" }} display="flex" alignItems="center" justifyContent="center">
                <ProjectCard { ...projectsData[current] } />
              </Box>

              <Button aria-label="Next" size="lg" onClick={ next } variant="ghost" color={{ base: "black", _dark: "white" }} bg="inherit" _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" } }} position="absolute" left={0} top="50%" transform="translateY(-50%)" display={{ base: "none", md: "flex" }} zIndex={1}>
                <ArrowBigRightIcon />
              </Button>

              <Flex mt={6} gap={4} display={{ base: "flex", md: "none" }}>
                <Button aria-label="Previous" size="md" onClick={ prev } variant="outline" borderColor={{ base: "earth.normal", _dark: "gray.800" }} color={{ base: "black", _dark: "white" }} bg="inherit">
                  <ArrowBigLeftIcon />
                </Button>
                <Button aria-label="Next" size="md" onClick={ next } variant="outline" borderColor={{ base: "earth.normal", _dark: "gray.800" }} color={{ base: "black", _dark: "white" }} bg="inherit">
                  <ArrowBigRightIcon />
                </Button>
              </Flex>
            </Flex>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}