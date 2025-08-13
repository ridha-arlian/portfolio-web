'use client'

import { Box, Container, Heading, Text, Button, VStack, HStack, Field, Input, Textarea } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Calicons } from '@/components/icons/iconsDarkMode'

const MotionBox = motion.create(Box)

export const Contacts = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submission prevented")
  }
  
  return (
    <>
      <Box as="section" id="contact" py={20}>
        <Container maxW="container.lg" px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" textStyle="sectionHeading" p="4" textAlign="center" bgGradient="headings" bgClip="text">
              Contact Me
            </Heading>
            <Heading as="h3" textStyle="sectionSubHeading" textAlign="center" color="white" mb="10">
              I&apos;m Open to Collaborations, Inquiries, and Professional Opportunities.
            </Heading>
            <Box bg="blackAlpha.500" p={{base: 4, sm: 6, md: 6, lg: 6, xl: 6}} borderRadius="lg" border="1px solid" borderColor="gray.800">
              <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                  <Field.Root>
                    <Field.Label textStyle="contactDetail" color="white">
                      Name
                    </Field.Label>
                    <Input type="text" name="name" bg="gray.800" borderColor="gray.700" color="white" _focus={{ borderColor: "brand.500" }}/>
                  </Field.Root>
                      
                  <Field.Root>
                    <Field.Label textStyle="contactDetail" color="white">
                      Email
                    </Field.Label>
                    <Input type="email" name="email" bg="gray.800" borderColor="gray.700" color="white" _focus={{ borderColor: "brand.500" }}/>
                  </Field.Root>
      
                  <Field.Root>
                    <Field.Label textStyle="contactDetail" color="white">
                      Message
                    </Field.Label>
                    <Textarea name="message" rows={4} bg="gray.800" borderColor="gray.700" color="white" _focus={{ borderColor: "brand.500" }}/>
                  </Field.Root>
                  
                  <Button type="submit" textStyle="contactButton" width="100%" _hover={{ bg: "blue.hovers" }}>
                    Send Message
                  </Button>
                </VStack>
              </form>
              <VStack mt={6} gap={4}>
                <Text color="gray.400" textStyle="contactDesc">
                  Prefer to schedule a meeting?
                </Text>
                <HStack gap={4} flexWrap="wrap" justify="center">
                  <Button textStyle="contactButton" bg="blue.vivid" _hover={{ bg: "blue.hovers" }} asChild>
                    <a href="https://calendar.app.google/EMk95a7fiXYqZcxk6" target="blank" rel="noopener noreferrer">
                      <Calicons boxSize="6"/>
                      Schedule a Meeting
                    </a>
                  </Button>
                  <Button rel="noopener noreferrer" textStyle="contactButton" variant="outline" bg="transparent" borderColor="white" color="white" _hover={{ borderColor: "blue.hovers", color: "blue.hovers" }} transition="all 0.3s" asChild>
                    <a href="https://calendar.app.google/EMk95a7fiXYqZcxk6" target="blank" rel="noopener noreferrer">
                      <Calicons boxSize="6"/>
                      View CV
                    </a>
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}