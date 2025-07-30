"use client"

import { Box, Heading, Container, Link } from "@chakra-ui/react"
import { skillsData } from "@/app/data/skills"
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from "react"

const MotionBox = motion.create(Box)

export const Skills = () => {
  const [showAll, setShowAll] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      const el = containerRef.current
      setIsOverflowing(el.scrollHeight > el.clientHeight)
    }
  }, [])
  return (
    <>
      <Box as="section" id="skills" py={20} bgGradient="linear(to-b, black, gray.900)">
        <Container maxW="container.xl" px={4}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Box>
              <Heading as="h3" size={{ base: "lg", md: "xl" }} mb={8} textAlign="center" bgGradient="linear(to-r, brand.400, pink.500)" bgClip="text" color="white">
                Code Barcelona ⚔️
              </Heading>

              <Box p={6} bg="blackAlpha.500" borderRadius="xl" border="1px solid" borderColor="gray.800" backdropFilter="blur(4px)">
                <Box ref={containerRef} display="flex" flexWrap="wrap" gap={4} justifyContent="center" maxH={showAll ? "1000px" : "6rem"} overflow="hidden" transition="max-height 0.4s ease-in-out">
                  {skillsData.map((skill) => (
                    <Link key={skill.name} href={skill.url} as={skill.url ? "a" : "div"} display="flex" alignItems="center" px={4} py={2} bg="whiteAlpha.100" borderRadius="full" border="1px solid" borderColor="gray.700" fontWeight="semibold" fontSize="sm" color="white" _hover={{ bg: "whiteAlpha.200" }} textDecoration="none">
                      {skill.icon && (
                        <Box as={skill.icon} boxSize={5} mr={2} />
                      )}
                      {skill.name}
                    </Link>
                  ))}
                </Box>

                {isOverflowing && (
                  <Box textAlign="center" mt={4}>
                    <button onClick={() => setShowAll(!showAll)} style={{ color: "#fff", textDecoration: "underline", cursor: "pointer", fontWeight: "bold" }}>
                      {showAll ? "Show Less" : "Show More..."}
                    </button>
                  </Box>
                )}
              </Box>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}