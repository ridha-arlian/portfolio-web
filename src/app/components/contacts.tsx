"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Box, Container, Heading, Text, Button, VStack, HStack, Field, Input, Textarea } from "@chakra-ui/react"

const MotionBox = motion.create(Box)

export const Contacts = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        alert("Pesan berhasil dikirim!")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        alert("Gagal mengirim pesan")
      }
    } catch (err) {
      console.error(err)
      alert("Terjadi error")
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <>
      <Box as="section" id="contact" py={20}>
        <Container maxW="container.lg" px={8}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" textStyle="sectionHeading" p="4" textAlign="center" bgGradient={{ _dark: "headings" }} color={{ base: "greens.normal" }} bgClip={{ _dark: "text" }}>
              Contact Me
            </Heading>
            <Heading as="h3" textStyle="sectionSubHeading" textAlign="center" color={{ base: "greens.texts", _dark: "white" }} mb={10}>
              I&apos;m Open to Collaborations, Inquiries, and Professional Opportunities.
            </Heading>
            <Box bg={{ base: "whites.cards", _dark: "blackAlpha.500" }} p={{base: 4, sm: 6, md: 6, lg: 6, xl: 6 }} borderRadius="lg" border="1px solid" borderColor={{ base: "earth.normal", _dark: "gray.800" }}>
              <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                  <Field.Root>
                    <Field.Label textStyle="contactDetail" color={{ base: "greens.texts", _dark: "white" }}>
                      Name
                    </Field.Label>
                    <Input type="text" value={name} name="name" bg={{ base: "whites.badges", _dark: "gray.800" }} borderColor={{ base: "earth.normal", _dark: "gray.800" }} color={{ base: "greens.normal", _dark: "white" }} _focus={{ borderColor: { base: "earth.normal", _dark: "gray.800" } }} onChange={(e) => setName(e.target.value)}/>
                  </Field.Root>
                      
                  <Field.Root>
                    <Field.Label textStyle="contactDetail" color={{ base: "greens.texts", _dark: "white" }}>
                      Email
                    </Field.Label>
                    <Input type="email" name="email" value={email} bg={{ base: "whites.badges", _dark: "gray.800" }} borderColor={{ base: "earth.normal", _dark: "gray.800" }} color={{ base: "greens.normal", _dark: "white" }} _focus={{ borderColor: { base: "earth.normal", _dark: "gray.800" } }} onChange={(e) => setEmail(e.target.value)}/>
                  </Field.Root>
      
                  <Field.Root>
                    <Field.Label textStyle="contactDetail" color={{ base: "greens.texts", _dark: "white" }}>
                      Message
                    </Field.Label>
                    <Textarea name="message" value={message} rows={4} bg={{ base: "whites.badges", _dark: "gray.800" }} borderColor={{ base: "earth.normal", _dark: "gray.800" }} color={{ base: "greens.normal", _dark: "white" }} _focus={{ borderColor: { base: "earth.normal", _dark: "gray.800" } }} onChange={(e) => setMessage(e.target.value)}/>
                  </Field.Root>
                  
                  <Button type="submit" textStyle="contactButton" width="100%" loading={loading} _hover={{ bg: { base: "earth.normal", _dark: "blue.hovers" } }}>
                    Send Message
                  </Button>
                </VStack>
              </form>
              <VStack mt={6} gap={4}>
                <Text color={{ base: "greens.normal", _dark: "gray.500" }} textStyle="contactDesc">
                  Prefer to schedule a meeting?
                </Text>
                <HStack gap={4} flexWrap="wrap" justify="center">
                  <Button textStyle="contactButton" bg={{ base: "earth.light", _dark: "blue.vivid" }} _hover={{ bg: { base: "earth.normal", _dark: "blue.hovers" } }} asChild>
                    <a href="https://calendar.app.google/EMk95a7fiXYqZcxk6" target="blank" rel="noopener noreferrer">
                      Schedule a Meeting
                    </a>
                  </Button>
                  {/* <Button rel="noopener noreferrer" textStyle="contactButton" bg="transparent" borderColor={{ base: "earth.light", _dark: "white" }} color={{ base: "earth.light", _dark: "white" }} _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" }, color: { base: "earth.normal", _dark: "blue.hovers" } }} transition="all 0.3s" asChild>
                    <a href="#" target="blank" rel="noopener noreferrer">
                      View CV
                    </a>
                  </Button> */}
                </HStack>
              </VStack>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}