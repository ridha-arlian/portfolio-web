"use client"

import { Box, Container, Heading, Text, VStack, HStack, Timeline } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"
import { timelineData } from "@/app/data/timeline"

const MotionBox = motion.create(Box)

export const Timelines = () => {
  return (
    <>
      <Box as="section" id="timelines" py={20} bgGradient="to-b" gradientFrom="black" gradientTo="gray.900" bgClip="text">
        <Container maxW="container.xl" px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" p="4" textStyle="sectionHeading" textAlign="center" bgGradient="to-r" gradientFrom="blue.vivid" gradientTo="white" bgClip="text">
              Experience
            </Heading>

            <Text as="h3" pb="8" textAlign="center" textStyle="sectionSubHeading" color="white">
              A timeline of my roles, contributions, and growth as a software developer.
            </Text>

            {/* Desktop */}
            <Box display={{ base: "none", md: "block" }}>
              <Timeline.Root variant="outline" size="sm">
                {timelineData.map((item, index) => {
                  const isEven = index % 2 === 0
                  const Card = (
                    <Box p={6} bg="blackAlpha.500" borderRadius="xl" backdropFilter="blur(4px)" border="1px solid" borderColor="gray.800" maxW="100%">
                      <HStack gap={4} mb={4}>
                        {/* <Box width={{ base: "64px", md: "48px" }} height={{ base: "64px", md: "48px" }} borderRadius="full" bg="gray.800" display="flex" alignItems="center" justifyContent="center">
                          <item.logo width="50%" height="50%" />
                        </Box> */}
                        <Box w="64px" h="64px" borderRadius="full" bg="gray.800" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
                          {item.logo && <Box as={item.logo} boxSize={6} />}
                        </Box>

                        <VStack align="flex-start" gap={1}>
                          <Heading as="h3" textStyle="roleTimeline" bgGradient="to-r" gradientFrom="blue.vivid" gradientTo="white" bgClip="text">
                            {item.role}
                          </Heading>
                          <Heading as="h4" textStyle="companyTimeline" color="white">
                            {item.company}
                          </Heading>
                          <HStack color="gray.400" textStyle="detailTimeline">
                            <Calendar size={16} />
                            <Text>
                              {item.period}
                            </Text>
                          </HStack>
                          <HStack color="gray.400" textStyle="detailTimeline">
                            <MapPin size={16} />
                            <Text>
                              {item.location}
                            </Text>
                          </HStack>
                          <HStack color="gray.400" textStyle="detailTimeline">
                            <Building2 size={16} />
                            <Text>
                              {item.type}
                            </Text>
                          </HStack>
                        </VStack>
                      </HStack>
                    </Box>
                  )

                  return (
                    <Timeline.Item key={item.id}>
                      <Timeline.Content flex="1" display="flex" justifyContent="flex-end">
                        {isEven && Card}
                      </Timeline.Content>

                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>

                      <Timeline.Content flex="1" display="flex" justifyContent="flex-start">
                        {!isEven && Card}
                      </Timeline.Content>
                    </Timeline.Item>
                  )
                })}
              </Timeline.Root>
            </Box>

            {/* Mobile */}
            <Box display={{ base: "block", md: "none" }}>
              <Timeline.Root variant="outline" size="sm">
                {timelineData.map((item) => (
                  <Timeline.Item key={item.id}>
                    <Timeline.Connector>
                      <Timeline.Separator />
                      <Timeline.Indicator />
                    </Timeline.Connector>
                    <Timeline.Content display="flex" width="100%">
                      <Box p={2} bg="blackAlpha.500" borderRadius="xl" backdropFilter="blur(4px)" border="1px solid" borderColor="gray.800" maxW="100%">
                        <HStack gap={3} mb={4}>
                          <Box w="40px" h="40px" minW="40px" minH="40px" maxW="40px" maxH="40px" flexShrink={0} borderRadius="full" bg="gray.800" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
                            {item.logo && <Box as={item.logo} boxSize={6} />}
                          </Box>

                          <VStack align="flex-start" gap={1}>
                            <Heading as="h3" textStyle="roleTimeline" bgGradient="to-r" gradientFrom="blue.vivid" gradientTo="white" bgClip="text">
                              {item.role}
                            </Heading>
                            <Heading as="h4" textStyle="companyTimeline" color="white">
                              {item.company}
                            </Heading>
                            <HStack color="gray.400" textStyle="detailTimeline">
                              <Calendar size={16} />
                              <Text>
                                {item.period}
                              </Text>
                            </HStack>
                            {/* <Divider orientation="vertical" borderColor="gray.600" height="16px" /> */}
                            <HStack color="gray.400" textStyle="detailTimeline">
                              <MapPin size={16} />
                              <Text>
                                {item.location}
                              </Text>
                            </HStack>
                            <HStack color="gray.400" textStyle="detailTimeline">
                              <Building2 size={16} />
                              <Text>
                                {item.type}
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

