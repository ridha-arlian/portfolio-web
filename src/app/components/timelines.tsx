/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Box, Container, Heading, Text, Image, VStack, HStack, Flex, Badge, Timeline } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import { timelineData } from '@/app/data/timeline'
import type { TimelineItemType } from '@/app/data/timeline'

function TimelineCard({ item }: { item: TimelineItemType }) {
  return (
    <>
      <Box p={6} bg="blackAlpha.500" borderRadius="xl" backdropFilter="blur(4px)" border="1px solid" borderColor="gray.800" maxW="100%">
        <HStack gap={4} mb={4}>
          <Box width={{ base: "64px", md: "48px" }} height={{ base: "64px", md: "48px" }} borderRadius="full" bg="gray.800" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
            <Image src={item.logo || "/placeholder.svg"} alt={item.company} borderRadius="full"/>
          </Box>

          <VStack align="flex-start" gap={1}>
            <Heading as="h3" textStyle="roleTimeline" bgGradient="to-r" gradientFrom="blue.vivid" gradientTo="whites.normal" bgClip="text">
              {item.role}
            </Heading>
            <Heading as="h4" textStyle="companyTimeline" color="texts.normal">
              {item.company}
            </Heading>
            <HStack color="gray.400" textStyle="detailTimeline">
              <Calendar size={16} />
              <Text>{item.period}</Text>
            </HStack>
            <HStack color="gray.400" textStyle="detailTimeline">
              <MapPin size={16} />
              <Text>{item.location}</Text>
            </HStack>
            <HStack color="gray.400" textStyle="detailTimeline">
              <Building2 size={16} />
              <Text>{item.type}</Text>
            </HStack>
          </VStack>
        </HStack>

        {/* {item.skills.length > 0 && (
          <Flex flexWrap="wrap" gap={2}>
            {item.skills.map((skill: string, idx: number) => (
              <Badge key={idx} px={3} py={1} textStyle="badgeTimeline" borderRadius="full" bg="blackAlpha.300" color="brand.300" border="1px solid" borderColor="brand.500/20">
                {skill}
              </Badge>
            ))}
          </Flex>
        )} */}
      </Box>
    </>
  )
}

const MotionBox = motion.create(Box)
export const Timelines = () => {
  return (
    <>
      <Box as="section" id="timelines" py={20} bgGradient="linear(to-b, black, gray.900)">
        <Container maxW="container.xl" px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Box mb={20}>
              <Heading as="h2" size={{ base: "lg", md: "xl" }} p="4" textStyle="sectionHeading" textAlign="center" bgGradient="to-r" gradientFrom="blue.vivid" gradientTo="whites.normal" bgClip="text">
                Experience
              </Heading>

              <Text as="h3" pb="8" textAlign="center" textStyle="sectionSubHeading" color="texts.normal">
                A timeline of my roles, contributions, and growth as a software developer.
              </Text>
            
              {/* Desktop Timeline */}
              <Box display={{ base: "none", md: "block" }}>
                <Timeline.Root variant="outline" size="sm">
                  {timelineData.map((item, index) => {
                    const isEven = index % 2 === 0
                    return (
                      <Timeline.Item key={item.id}>
                        
                        {/* Konten kiri */}
                        <Timeline.Content flex="1" display="flex" justifyContent="flex-end" alignItems="center">
                          { isEven &&
                            <Box width="100%">
                              <TimelineCard item={item} />
                            </Box>
                          }
                        </Timeline.Content>
                        
                        {/* Garis tengah */}
                        <Timeline.Connector>
                          <Timeline.Separator />
                          <Timeline.Indicator />
                        </Timeline.Connector>
            
                        {/* Konten kanan */}
                        <Timeline.Content flex="1" display="flex" justifyContent="flex-start" alignItems="center">
                          { !isEven &&
                            <Box width="100%">
                              <TimelineCard item={item} />
                            </Box>
                          }
                        </Timeline.Content>
                      </Timeline.Item>
                    )
                  })}
                </Timeline.Root>
              </Box>
            
              {/* Mobile Timeline */}
              <Box display={{ base: "block", md: "none" }}>
                <Timeline.Root variant="outline" size="sm">
                  {timelineData.map((item, index) => (
                    <Timeline.Item key={item.id}>
                      <Timeline.Connector>
                        <Timeline.Separator/>
                        <Timeline.Indicator/>
                      </Timeline.Connector>
                      <Timeline.Content display="flex" width="100%" justifyContent="center" alignItems="center">
                        <Box width="100%">
                          <TimelineCard item={item} />
                        </Box>
                      </Timeline.Content>
                    </Timeline.Item>
                  ))}
                </Timeline.Root>
              </Box>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}