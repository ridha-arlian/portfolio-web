import { useState } from "react"
import { Box, Container, Heading, Text, Flex, Badge, Image, Link, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ArrowBigRightIcon, ArrowBigLeftIcon } from 'lucide-react'
import { projectsData } from '@/app/data/projects'

const MotionBox = motion.create(Box)

function ProjectCard({ title, description, tags, url }: { title: string, description: string, tags: string[], url?: string }) {
  return (
    <>
      <Box p={6} borderRadius="lg" bg="gray.900" border="1px solid" borderColor="gray.800" w="full" maxW="lg" mx="auto">
        {url && (
          <Link href={url} display="block" overflow="hidden" borderRadius="md" border="1px solid" borderColor="gray.700" mb={4}>
            <Image src={`https://image.thum.io/get/width/800/crop/768/${url}`} alt={title} w="full" h="180px" objectFit="cover"/>
          </Link>
        )}
        
        <Heading as="h3" size="md" mb={3} color="white" textAlign="center">
          {title}
        </Heading>
        
        <Text color="gray.400" mb={4} textAlign="center">
          {description}
        </Text>
        
        <Flex flexWrap="wrap" justify="center" gap={2}>
          {tags.map((tag, i) => (
            <Badge key={i} fontSize="xs" px={2} py={1} borderRadius="full" bg="blackAlpha.300" color="brand.300">
              {tag}
            </Badge>
          ))}
        </Flex>
      </Box>
    </>
  )
}

export const Works = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
  }

  const next = () => {
    setCurrent((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <Box as="section" id="work" py={20} bgGradient="linear(to-b, gray.900, black)">
        <Container maxW="container.md" px={4}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={12} textAlign="center" bgGradient="linear(to-r, brand.400, pink.500)" bgClip="text" color="white">
              What I&apos;ve Built 🏗️
            </Heading>
            <Flex direction="column" align="center" justify="center" minH="500px" position="relative">
              {/* Card tampil di tengah */}
              <Box w="full" maxW="lg" mx="auto">
                <ProjectCard {...projectsData[current]} />
              </Box>

              {/* Tombol di bawah untuk mobile */}
              <Flex mt={6} gap={4} display={{ base: "flex", md: "none" }}>
                <Button aria-label="Previous" onClick={prev} variant="outline" colorScheme="whiteAlpha">
                  <ArrowBigLeftIcon />
                </Button>
                <Button aria-label="Next" onClick={next} variant="outline" colorScheme="whiteAlpha">
                  <ArrowBigRightIcon />
                </Button>
              </Flex>

              {/* Tombol kiri-kanan untuk desktop */}
              <Button aria-label="Previous" onClick={prev} variant="ghost" colorScheme="whiteAlpha" position="absolute" left={0} top="50%" transform="translateY(-50%)" display={{ base: "none", md: "flex" }}>
                <ArrowBigLeftIcon />
              </Button>

              <Button aria-label="Next" onClick={next} variant="ghost" colorScheme="whiteAlpha" position="absolute" right={0} top="50%" transform="translateY(-50%)" display={{ base: "none", md: "flex" }}>
                <ArrowBigRightIcon />
              </Button>
            </Flex>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}