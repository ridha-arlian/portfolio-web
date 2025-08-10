'use client'

import { Box, Container, Text, VStack, HStack, Link } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { footersData } from '@/app/data/footer'

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <>
      <Box as="footer" py={12} bgGradient="to-t" gradientFrom="gray.900" gradientTo="black">
        <Container maxW="container.xl" px={4}>
          <HStack justify="center" gap={6} mb={8} flexWrap="wrap">
            {footersData.map((item) => (
              <Link key={item.label} href={item.href} aria-label={item.label} display="flex" textStyle="footerButton" alignItems="center" gap={2} px={4} py={2} borderRadius="full" bg="blackAlpha.300" color="white" transition="all 0.3s">
                {item.icon && <Box as={item.icon} boxSize={{ base: 6, md: 6 }} mr={2} />}
                {item.label}
              </Link>
            ))}
          </HStack>

          <VStack gap={2}>
            <Text color="gray.500" textStyle="footerText" textAlign="center">
              {year ? `© ${year} Ridha Arlian. All rights reserved.` : null}
            </Text>
            <Link href="mailto:ridhaarlian@proton.me" color="brand.400" textStyle="footerText" _hover={{ color: 'brand.300' }}>
              ridhaarlian@proton.me
            </Link>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
