'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/app/data/skills'
import { useEffect, useState, useRef } from 'react'
import { useColorModeValue } from '@/components/ui/color-mode'
import { Box, Heading, Container, Link, Text } from '@chakra-ui/react'

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

  const mode = useColorModeValue<'light' | 'dark'>('light', 'dark')

  return (
    <>
      <Box as='section' id='skills' py={20} bgGradient='linear(to-b, black, gray.900)'>
        <Container maxW='container.xl' px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Box>
              <Heading as='h2' p={4} textStyle='sectionHeading' textAlign='center' bgGradient={{ _dark: 'headings' }} color={{ base: 'greens.normal' }} bgClip={{ _dark: 'text' }}>
                Tech Stack & Skills
              </Heading>

              <Heading as='h3' textStyle='sectionSubHeading' mb={8} textAlign='center' color={{ base: 'greens.texts', _dark: 'white' }}>
                Languages, tools, and frameworks I use to build fast and scalable web applications.
              </Heading>

              <Box p={{ base: 3, sm: 3, md: 3, lg: 3, xl: 6 }} bg={{ base: 'whites.cards', _dark: 'blackAlpha.500' }} borderRadius='xl' border='1px solid' borderColor={{ base: 'earth.normal', _dark: 'gray.800' }} backdropFilter='blur(4px)'>
                <Box ref={containerRef} display='flex' flexWrap='wrap' gap={{ base: 1, sm: 2, md: 2, lg: 2, xl: 4 }} justifyContent='center' maxH={ showAll ? { base: '1000px', sm: '1000px', md: '1000px', lg: '1200px', xl: '1200px' } : { base: '6.5rem', sm: '6.5rem', md: '6.5rem', lg: '6.5rem', xl: '7rem' }} overflow='hidden' transition='max-height 0.4s ease-in-out'>
                  {skillsData.map((skill) => {
                    const Icon = mode === 'light' ? skill.iconLight : skill.iconDark
                    return (
                      <Link key={ skill.name } href={ skill.url } textStyle='skillBadge' display='flex' alignItems='center' mt={{ base: 2, sm: 2, md: 2, lg: 2, xl: 2 }} px={{ base: 2, sm: 2, md: 2, lg: 2, xl: 4 }} py={{ base: 2, sm: 2, md: 2, lg: 2, xl: 2 }} bg={{ base: 'whites.badges', _dark: 'whiteAlpha.100' }} borderRadius='full' border='1px solid' borderColor={{ base: 'earth.light', _dark: 'gray.800' }} color={{ base: 'greens.texts', _dark: 'white' }} _hover={{ borderColor: { base: 'earth.normal', _dark: 'blue.hovers' } }} textDecoration='none' target='blank' rel='noopener noreferrer'>
                        <Box as={ Icon } boxSize={{ base: 4, sm: 5, md: 5, lg: 6, xl: 6 }} mr={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }} />
                        { skill.name }
                      </Link>
                    )
                  })}
                </Box>

                {isOverflowing && (
                  <Box textAlign='center' mt={{ base: 1, sm: 2, md: 2, lg: 2, xl: 4 }}>
                    <Text as='button' textStyle='showMore' onClick={ () => setShowAll(!showAll) } color={{ base: 'greens.texts', _dark: 'white' }} cursor='pointer'>
                      { showAll ? 'Show Less' : 'Show More...' }
                    </Text>
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