'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { Box } from '@chakra-ui/react'

interface BoxType {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const AnimatedBox = React.memo(({ x, y, size, delay }: Omit<BoxType, "id">) => (
  <Box position="absolute" bg="gray.300" opacity={0.1} width={`${size}px`} height={`${size}px`} left={`${x}px`} top={`${y}px`} animation={`float 6s ease-in-out infinite`} animationDelay={`${delay}s`} css={{ "@keyframes float": { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-20px)" },},}}/>
))

AnimatedBox.displayName = "AnimatedBox"

const AnimatedBoxes = () => {
  const [boxes, setBoxes] = useState<BoxType[]>([])

  const generateBoxes = useCallback(() => {
    const newBoxes: BoxType[] = []
    const boxCount = Math.floor((window.innerWidth * window.innerHeight) / 80000) + 2
    for (let i = 0; i < boxCount; i++) {
      const x = (Math.random() * 0.6 + 0.2) * window.innerWidth
      const y = (Math.random() * 0.6 + 0.2) * window.innerHeight
      newBoxes.push({
        id: i,
        x,
        y,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })
    }
    setBoxes(newBoxes)
  }, [])

  useEffect(() => {
    generateBoxes()
    window.addEventListener("resize", generateBoxes)
    return () => window.removeEventListener("resize", generateBoxes)
  }, [generateBoxes])

  return (
    <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none">
      {boxes.map((box) => (
        <AnimatedBox key={box.id} {...box} />
      ))}
    </Box>
  )
}

export default AnimatedBoxes