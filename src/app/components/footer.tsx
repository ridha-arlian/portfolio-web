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
              <Link key={item.label} href={item.href} aria-label={item.label} display="flex" border="1px solid" borderColor="gray.700" alignItems="center" justifyContent="center" boxSize={10} borderRadius="full" bg="gray.900" _hover={{ borderColor: "blue.vivid" }} target="_blank" rel="noopener noreferrer">
                {item.icon && <Box as={item.icon} boxSize={6} />}
              </Link>
            ))}
          </HStack>

          <VStack gap={2}>
            <Text color="gray.500" textStyle="footerText" textAlign="center">
              {year ? `© ${year} Ridha Arlian. All rights reserved.` : null}
            </Text>
            <Link href="mailto:ridhaarlian@proton.me" color="brand.400" textStyle="footerText" _hover={{ color: 'brand.300' }} target="blank" rel="noopener noreferrer">
              ridhaarlian@proton.me
            </Link>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
