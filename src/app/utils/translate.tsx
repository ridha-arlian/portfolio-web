'use client'

import { FaGlobe } from 'react-icons/fa'
import { Box, Button } from '@chakra-ui/react'

export const Translate = () => {

  return (
    <>
      <Box position="fixed" bottom="4" right="4" zIndex="overlay">
        <Button aria-label="Toggle Language" borderRadius="full" boxShadow="lg" size="lg" colorScheme="teal">
          <FaGlobe />
        </Button>
      </Box>
    </>
  )
}