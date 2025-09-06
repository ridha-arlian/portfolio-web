"use client"

import { useState, useEffect } from "react"
import { footersData } from "@/app/data/footer"
import { useColorModeValue } from "@/components/ui/color-mode"
import { Box, Container, Text, VStack, HStack, Link } from "@chakra-ui/react"

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const mode = useColorModeValue<"light" | "dark">("light", "dark")

  return (
    <>
      <Box as="footer" py={12} bgGradient="to-t" gradientFrom={{ base: "gray.100", _dark: "gray.900" }} gradientTo={{ base: "whites.bgs", _dark: "black" }}>
        <Container maxW="container.xl" px={4}>
          <HStack justify="center" gap={6} mb={8} flexWrap="wrap">
            {footersData.map((item) => {
              const Icon = mode === "light" ? item.iconLight : item.iconDark
              return (
                <Link key={item.label} href={item.href} aria-label={item.label} display="flex" border="1px solid" borderColor={{ base: "earth.light", _dark: "gray.800" }} alignItems="center" justifyContent="center" boxSize={10} borderRadius="full" bg={{ base: "whites.badges", _dark: "whiteAlpha.100" }} _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" } }} target="_blank" rel="noopener noreferrer">
                  <Box as={Icon} boxSize={6} />
                </Link>
              )
            })}
          </HStack>

          <VStack gap={2}>
            <Text color={{ base: "greens.texts", _dark: "gray.500" }} textStyle="footerText" textAlign="center">
              {year ? `© ${year} Ridha Arlian. All rights reserved.` : null}
            </Text>
            <Link href="mailto:ridhaarlian@proton.me" color={{ base: "greens.normal", _dark: "white" }} textStyle="footerText" _hover={{ color: { base: "earth.normal", _dark: "blue.hovers" } }} target="blank" rel="noopener noreferrer">
              ridhaarlian@proton.me
            </Link>
          </VStack>
        </Container>
      </Box>
    </>
  )
}