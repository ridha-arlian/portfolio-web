'use client'

import { Box, Container, Text, VStack, HStack, Link, IconButton } from '@chakra-ui/react'
import { MessageSquare, PenTool } from 'lucide-react'

interface SocialIconProps {
  icon: React.ReactNode
  href: string
  label: string
  className?: string
  isDisabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function SocialIcon({ icon, href, label, className = "", isDisabled = false, onClick }: SocialIconProps) {
  return (
    <>
      <Link href={href} aria-label={label} className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ${className}`} onClick={onClick}>
        <IconButton as="a" aria-label={label} size="lg" variant="ghost" borderRadius="full" bg="blackAlpha.300" color="white" _hover={{ bg: isDisabled ? "blackAlpha.300" : "linear-gradient(to-r, var(--chakra-colors-brand-500), var(--chakra-colors-pink-500))", transform: isDisabled ? "none" : "scale(1.1)" }} opacity={isDisabled ? 0.5 : 1} cursor={isDisabled ? "not-allowed" : "pointer"} transition="all 0.3s">
          <span className="text-white">{icon}</span>
          <span className="sr-only">{label}</span>
        </IconButton>
      </Link>
    </>
  )
}
export const Footer = () => {
  return (
    <>
      <Box as="footer" py={12} bgGradient="linear(to-t, gray.900, black)">
        <Container maxW="container.xl" px={4}>
          <HStack justify="center" gap={6} mb={8} flexWrap="wrap">
            <SocialIcon icon={<MessageSquare />} href="https://github.com/aakash4dev" label="GitHub" />
            <SocialIcon icon={<MessageSquare />} href="https://linkedin.com/in/aakash4dev" label="LinkedIn" />
            <SocialIcon icon={<MessageSquare />} href="https://twitter.com/aakash4dev" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/aakash4dev" label="Discord" />
            <SocialIcon icon={<PenTool />} href="https://medium.com/@aakash4dev" label="Medium" />
            {/* <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              isDisabled={true}
              // onClick={(e) => {
              //   e.preventDefault()
              //   console.log("Mobile icon click prevented")
              // }}
            /> */}
          </HStack>
          <VStack gap={2}>
            <Text color="gray.500" fontSize="sm" textAlign="center">
              © {new Date().getFullYear()} Ridha Arlian. All rights reserved.
            </Text>
            <Link href="mailto:ridhaarlian@proton.me" color="brand.400" _hover={{ color: "brand.300" }}>
              ridhaarlian@proton.me
            </Link>
          </VStack>
        </Container>
      </Box>  
    </>
  )
}