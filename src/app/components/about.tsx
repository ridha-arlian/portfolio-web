'use client'

import { Box, Container, Heading, Text, Image, VStack, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

export const AboutMe = () => {
  return (
    <>
      <Box as="section" id="about" py={12} bgGradient="linear(to-b, black, gray.900)">
        <Container maxW="container.xl" px={4}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading color="white" as="h2" size={{ base: "xl", md: "2xl" }} mb={8} textAlign="center" bgGradient="linear(to-r, brand.400, pink.500)" bgClip="text">
              Code, Coffee & Me ☕💻
            </Heading>

            {/* Profile Section */}
            <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={8} mb={16} alignItems="center">
              <GridItem order={{ base: 2, md: 1 }}>
                <VStack gap={4} align={{ base: "center", md: "flex-start" }}>
                  
                  {/* Mobile description */}
                  <Text fontSize="lg" lineHeight="relaxed" display={{ base: "block", md: "none" }} textAlign="center">
                    Blockchain Sorcerer 🧙‍♂️ and Full Stack Dev 💻. Building secure, scalable solutions in the
                    crypto-verse. From DeFi to Web3, turning complex tech into seamless experiences. ⛓⚡🔥
                  </Text>
                  
                  {/* Desktop description */}
                  <VStack gap={4} align="flex-start" display={{ base: "none", md: "flex" }}>
                    <Text fontSize="xl">
                      🚀 <Text as="strong">Hey, I`&apos;`m Aakash Singh Rajput!</Text>
                    </Text>
                    <Text>
                      A <Text as="strong">Blockchain Wizard 🧙‍♂️</Text> and{" "}
                      <Text as="strong">Full Stack Alchemist 💻</Text>, turning <Text as="strong">lines of code</Text>{" "}
                      into <Text as="strong">decentralized magic</Text>! Whether it&apos;s{" "}
                      <Text as="strong">smart contracts</Text>, <Text as="strong">ZK proofs</Text>, or{" "}
                      <Text as="strong">FHE sorcery</Text>, I love pushing Web3 to the next level.
                    </Text>
                    <Text>
                      I spend my days <Text as="strong">hacking away in Solidity, Go, and Rust</Text>—and my nights
                      wondering why gas fees still exist. 😅 When I&apos;m not coding, I&apos;m probably deep-diving into{" "}
                      <Text as="strong">DeFi rabbit holes</Text>, contributing to{" "}
                      <Text as="strong">open-source chaos</Text>, or evangelizing blockchain to anyone who`&apos;`ll listen (or
                      can`&apos;`t escape).
                    </Text>
                    <Text>
                      Let`&apos;`s <Text as="strong">connect, build, and break things</Text>—because the{" "}
                      <Text as="strong">future is decentralized, and I refuse to be left behind!</Text> ⛓⚡🔥
                    </Text>
                  </VStack>
                </VStack>
              </GridItem>
              <GridItem order={{ base: 1, md: 2 }}>
                <Box position="relative" width="256px" height="256px" mx="auto">
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-69dycok1tWUrjh0VA4bIB19grsFa5b.jpeg" alt="Aakash Singh Rajput" borderRadius="lg" objectFit="cover" boxShadow="lg" width="100%" height="100%"/>
                </Box>
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}