'use client'

import { motion } from 'framer-motion'
import { timelineData } from '@/app/data/timeline'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import { Box, Container, Heading, Text, VStack, HStack, Timeline } from '@chakra-ui/react'

const MotionBox = motion.create(Box)

export const Timelines = () => {
  return (
    <>
      <Box as='section' id='timelines' py={20} bgGradient='to-b' gradientFrom='black' gradientTo='gray.900' bgClip='text'>
        <Container maxW='container.xl' px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as='h2' p={4} textStyle='sectionHeading' textAlign='center' bgGradient={{ _dark: 'headings' }} color={{ base: 'greens.normal' }} bgClip={{ _dark: 'text' }}>
              Experience
            </Heading>

            <Text as='h3' pb={8} textAlign='center' textStyle='sectionSubHeading' color={{ base: 'greens.texts', _dark: 'white' }}>
              A timeline of my roles, contributions, and growth as a software developer.
            </Text>

            {/* Desktop */}
            <Box display={{ base: 'none', md: 'block' }}>
              <Timeline.Root variant='outline' size='sm'>
                {timelineData.map((item, index) => {
                  const isEven = index % 2 === 0
                  const Card = (
                    <Box p={4} bg={{ base: 'whites.cards', _dark: 'blackAlpha.500' }} borderRadius='xl' backdropFilter='blur(4px)' border='1px solid' borderColor={{ base: 'earth.normal', _dark: 'gray.800' }} maxW='100%'>
                      <HStack gap={4} mb={4}>
                        <Box w={{ md: '60px', lg: '60px', xl: '60px' }} h={{ md: '60px', lg: '60px', xl: '60px' }} minW={{ md: '60px', lg: '60px', xl: '60px' }} minH={{ md: '60px', lg: '60px', xl: '60px' }} maxW={{ md: '60px', lg: '60px', xl: '60px' }} maxH={{ md: '60px', lg: '60px', xl: '60px' }} flexShrink={0} borderRadius='full' bg='gray.800' display='flex' alignItems='center' justifyContent='center' overflow='hidden'>
                          { item.logo && <Box as={ item.logo } boxSize={{ md: 9, lg: 9, xl: 10 }} /> }
                        </Box>

                        <VStack align='flex-start' gap={1}>
                          <Heading as='h3' textStyle='roleTimeline' bgGradient={{ _dark: 'headings' }} color={{ base: 'greens.normal' }} bgClip={{ _dark: 'text' }}>
                            { item.role }
                          </Heading>
                          <Heading as='h4' textStyle='companyTimeline' color={{ base: 'greens.texts', _dark: 'white' }}>
                            { item.company }
                          </Heading>
                          <HStack color={{ base: 'gray.400', _dark: 'gray.400' }} textStyle='detailTimeline'>
                            <Calendar size={16}/>
                            <Text>
                              { item.period }
                            </Text>
                          </HStack>
                          <HStack color={{ base: 'gray.400', _dark: 'gray.400' }} textStyle='detailTimeline'>
                            <MapPin size={16}/>
                            <Text>
                              { item.location }
                            </Text>
                          </HStack>
                          <HStack color={{ base: 'gray.400', _dark: 'gray.400' }} textStyle='detailTimeline'>
                            <Building2 size={16}/>
                            <Text>
                              { item.type }
                            </Text>
                          </HStack>
                        </VStack>
                      </HStack>
                    </Box>
                  )

                  return (
                    <Timeline.Item key={ item.id }>
                      <Timeline.Content flex='1' display='flex' justifyContent='flex-end'>
                        { isEven && Card }
                      </Timeline.Content>

                      <Timeline.Connector>
                        <Timeline.Separator borderColor={{ base: 'greens.texts', _dark: 'white' }}/>
                        <Timeline.Indicator bg={{ base: 'greens.texts', _dark: 'white' }}/>
                      </Timeline.Connector >

                      <Timeline.Content flex='1' display='flex' justifyContent='flex-start'>
                        { !isEven && Card }
                      </Timeline.Content>
                    </Timeline.Item>
                  )
                })}
              </Timeline.Root>
            </Box>

            {/* Mobile */}
            <Box display={{ base: 'block', md: 'none' }}>
              <Timeline.Root variant='outline' size='sm'>
                {timelineData.map((item) => (
                  <Timeline.Item key={ item.id }>
                    
                    <Timeline.Connector>
                      <Timeline.Separator borderColor={{ base: 'greens.texts', _dark: 'white' }}/>
                      <Timeline.Indicator bg={{ base: 'greens.texts', _dark: 'white' }}/>
                    </Timeline.Connector>
                    
                    <Timeline.Content display='flex' width='100%'>
                      <Box p={2} bg={{ base: 'whites.cards', _dark: 'blackAlpha.500' }} borderRadius='xl' backdropFilter='blur(4px)' border='1px solid' borderColor={{ base: 'earth.normal', _dark: 'gray.800' }} maxW='100%'>
                        <HStack gap={3} mb={4}>
                          <Box w={{ base: '40px', sm: '60px' }} h={{ base: '40px', sm: '60px' }} minW={{ base: '40px', sm: '60px' }} minH={{ base: '40px', sm: '60px', md: '40px' }} maxW={{ base: '40px', sm: '60px', md: '40px' }} maxH={{ base: '40px', sm: '60px', md: '40px' }} flexShrink={0} borderRadius='full' bg='gray.800' display='flex' alignItems='center' justifyContent='center' overflow='hidden'>
                            { item.logo && <Box as={ item.logo } boxSize={{ base: 6, sm: 8 }}/> }
                          </Box>

                          <VStack align='flex-start' gap={1}>
                            <Heading as='h3' textStyle='roleTimeline' bgGradient={{ _dark: 'headings' }} color={{ base: 'greens.normal' }} bgClip={{ _dark: 'text' }}>
                              { item.role }
                            </Heading>
                            <Heading as='h4' textStyle='companyTimeline' color={{ base: 'greens.texts', _dark: 'white' }}>
                              { item.company }
                            </Heading>
                            <HStack color={{ base: 'gray.400', _dark: 'gray.400' }} textStyle='detailTimeline'>
                              <Calendar size={16}/>
                              <Text>
                                { item.period }
                              </Text>
                            </HStack>
                            {/* <Divider orientation="vertical" borderColor="gray.600" height="16px" /> */}
                            <HStack color={{ base: 'gray.400', _dark: 'gray.400' }} textStyle='detailTimeline'>
                              <MapPin size={16}/>
                              <Text>
                                { item.location }
                              </Text>
                            </HStack>
                            <HStack color={{ base: 'gray.400', _dark: 'gray.400' }} textStyle='detailTimeline'>
                              <Building2 size={16} />
                              <Text>
                                { item.type }
                              </Text>
                            </HStack>
                          </VStack>
                        </HStack>
                      </Box>
                    </Timeline.Content>
                  </Timeline.Item>
                ))}
              </Timeline.Root>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}