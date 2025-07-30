'use client'

import { Box, Container, Heading, Flex, Text, Grid } from '@chakra-ui/react'
import { FileText, Blocks, Cpu, Braces, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)
const MotionGrid = motion.create(Grid)

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <>
      <Box p={6} borderRadius="lg" bg="gray.900" border="1px solid" borderColor="gray.800" _hover={{ borderColor: "brand.500" }} transition="all 0.3s" textAlign={{ base: "center", md: "left" }}>
        <Flex justify={{ base: "center", md: "flex-start" }} mb={4}>
          {icon}
        </Flex>
        <Heading as="h3" size="md" mb={3} color="white">
          {title}
        </Heading>
        <Text color="gray.400">{description}</Text>
      </Box>
    </>
  )
}
export const Services = () => {
  return (
    <>
      <Box as="section" id="services" py={20} bg="black">
        <Container maxW="container.xl" px={4}>
          <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={12} textAlign="center" bgGradient="linear(to-r, brand.400, pink.500)" bgClip="text" color="white">
              My Expertise 🛠️
            </Heading>
            <MotionGrid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
              <ServiceCard
                icon={<Blocks size={40} color="var(--chakra-colors-brand-500)" />}
                title="Blockchain Development"
                description="Custom blockchain solutions, smart contracts, and decentralized applications with a focus on security and efficiency."
              />
              <ServiceCard
                icon={<Cpu size={40} color="var(--chakra-colors-pink-500)" />}
                title="ZK & FHE Implementation"
                description="Zero-knowledge proofs and fully homomorphic encryption solutions for privacy-preserving applications."
              />
              <ServiceCard
                icon={<Braces size={40} color="var(--chakra-colors-brand-500)" />}
                title="Full Stack Development"
                description="End-to-end web application development with modern frameworks and best practices."
              />
              <ServiceCard
                icon={<FileText size={40} color="var(--chakra-colors-pink-500)" />}
                title="Smart Contract Auditing"
                description="Comprehensive security audits for smart contracts to identify vulnerabilities and ensure robust implementation."
              />
              <ServiceCard
                icon={<FileText size={40} color="var(--chakra-colors-brand-500)" />}
                title="Web3 Integration"
                description="Seamless integration of Web3 technologies into existing applications and platforms."
              />
              <ServiceCard
                icon={<MessageSquare size={40} color="var(--chakra-colors-pink-500)" />}
                title="Technical Consultation"
                description="Expert advice on blockchain architecture, technology stack selection, and implementation strategies."
              />
            </MotionGrid>
          </MotionBox>
        </Container>
      </Box>
    </>
  )
}