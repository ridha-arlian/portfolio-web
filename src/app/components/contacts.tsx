'use client'

import { Box, Container, Heading, Text, Button, VStack, HStack, Field, Input, Textarea } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Calendar, FileText } from 'lucide-react'

const MotionBox = motion.create(Box)

export const Contacts = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submission prevented")
  }
  
  return (
    <>
      <Box as="section" id="contact" py={20} bg="black">
        <Container maxW="container.lg" px={4}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={12} textAlign="center" bgGradient="linear(to-r, brand.400, pink.500)" bgClip="text" color="white">
              Ping Me 🚀
            </Heading>
            <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.800">
              <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                  <Field.Root>
                    <Field.Label color="gray.400">
                      Name
                    </Field.Label>
                    <Input type="text" name="name" bg="gray.800" borderColor="gray.700" color="white" _focus={{ borderColor: "brand.500" }}/>
                  </Field.Root>
                      
                  <Field.Root>
                    <Field.Label color="gray.400">
                      Email
                    </Field.Label>
                    <Input type="email" name="email" bg="gray.800" borderColor="gray.700" color="white" _focus={{ borderColor: "brand.500" }}/>
                  </Field.Root>
      
                  <Field.Root>
                    <Field.Label color="gray.400">
                      Message
                    </Field.Label>
                    <Textarea name="message" rows={4} bg="gray.800" borderColor="gray.700" color="white" _focus={{ borderColor: "brand.500" }}/>
                  </Field.Root>
                  
                  <Button type="submit" width="100%" bgGradient="linear(to-r, brand.500, pink.500)" _hover={{ bgGradient: "linear(to-r, brand.600, pink.600)" }}>
                    Send Message
                  </Button>
                </VStack>
              </form>
              <VStack mt={6} gap={4}>
                <Text color="gray.400">
                  Prefer to schedule a meeting?
                </Text>
                <HStack gap={4} flexWrap="wrap" justify="center">
                  <Button as="a" rel="noopener noreferrer" bg="brand.600" _hover={{ bg: "brand.700" }} color="white">
                    <Calendar size={16} />
                    Schedule a Meeting
                  </Button>
                  <Button as="a" rel="noopener noreferrer" bg="pink.600" _hover={{ bg: "pink.700" }} color="white">
                    <FileText size={16} />
                    View CV
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