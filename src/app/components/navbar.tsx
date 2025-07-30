'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Box, Flex, Text, Link, IconButton, Drawer, VStack, HStack, CloseButton, Button } from '@chakra-ui/react'
import { LucideHamburger, Calendar } from 'lucide-react'
import { Githubicons, Linkedinicons } from '@/components/icons/iconsDarkMode'

const MotionBox = motion.create(Box)
const MotionFlex = motion.create(Flex)

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    // { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <MotionFlex as="nav" position="fixed" top="0" left="0" right="0" zIndex={50} justify="space-between" align="center" px={{ base: 4, md: 8 }} py={scrolled ? 3 : 5} bg={scrolled ? "blackAlpha.800" : "transparent"} backdropFilter={scrolled ? "blur(12px)" : "none"} initial={{ y: -100 }} animate={{ y: 0 }} transitionDuration="0.5s">
        <Link href="#home" fontSize="2xl" fontWeight="bold" color="white" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={(e) => scrollToSection(e, "#home")}>
          Ridha Arlian
          <Text as="span" color="red.500">
            .
          </Text>
        </Link>

        {/* Desktop Navigation */}
        <HStack display={{ base: "none", md: "flex" }} gap={8} align="center">
          {navLinks.map((link) => (
            <Box key={link.name} position="relative" role="group">
              <Link href={link.href} color="gray.300" _hover={{ color: "white", textDecoration: "none" }} transition="color 0.3s" onClick={(e) => scrollToSection(e, link.href)}>
                {link.name}
              </Link>
              <Box position="absolute" bottom="0" left="0" width="0" height="2px" bgGradient="linear(to-r, brand.500, pink.500)" transition="width 0.3s" _groupHover={{ width: "100%" }}/>
            </Box>
          ))}
          <HStack gap={4}>
            <Button  rel="noopener noreferrer" aria-label="Schedule a meeting" variant="ghost" color="gray.300" _hover={{ color: "white", transform: "scale(1.2) rotate(5deg)" }} transition="all 0.3s" asChild>
              <a href="https://linkedin.com/in/ridha-arlian">
                <Linkedinicons/>
              </a>
            </Button>
            <Button  rel="noopener noreferrer" aria-label="GitHub" variant="ghost" color="gray.300" _hover={{ color: "white", transform: "scale(1.2) rotate(5deg)" }} transition="all 0.3s" asChild>
              <a href="https://github.com/ridha-arlian">
                <Githubicons/>
              </a>
            </Button>
            <Button  rel="noopener noreferrer" aria-label="LinkedIn" variant="ghost" color="gray.300" _hover={{ color: "white", transform: "scale(1.2) rotate(5deg)" }} transition="all 0.3s" asChild>
              <a href="https://linkedin.com/in/aakash4dev">
                <Calendar size={24} />
              </a>
            </Button>
            <Button  rel="noopener noreferrer" aria-label="LinkedIn" variant="ghost" color="gray.300" _hover={{ color: "white", transform: "scale(1.2) rotate(5deg)" }} transition="all 0.3s" asChild>
              <a href="https://linkedin.com/in/aakash4dev">
                <Calendar size={24} />
              </a>
            </Button>
          </HStack>
        </HStack>

        {/* Mobile Navigation */}
        <HStack display={{ base: "flex", md: "none" }} gap={4}>
          <Button  rel="noopener noreferrer" aria-label="Schedule a meeting" variant="ghost" color="gray.300" _hover={{ color: "white" }} asChild>
            <a href="https://linkedin.com/in/ridha-arlian">
              <Linkedinicons/>
            </a>
          </Button>
          <Button  rel="noopener noreferrer" aria-label="Schedule a meeting" variant="ghost" color="gray.300" _hover={{ color: "white" }} asChild>
            <a href="https://github.com/ridha-arlian">
              <Githubicons/>
            </a>
          </Button>
          <Button  rel="noopener noreferrer" aria-label="Schedule a meeting" variant="ghost" color="gray.300" _hover={{ color: "white" }} asChild>
            <a href="https://calendly.com/aakash4dev/quickchat">
              <Calendar size={24} />
            </a>
          </Button>
          <Button  rel="noopener noreferrer" aria-label="Schedule a meeting" variant="ghost" color="gray.300" _hover={{ color: "white" }} asChild>
            <a href="https://calendly.com/aakash4dev/quickchat">
              <Calendar size={24} />
            </a>
          </Button>
          
          <Drawer.Root placement="end">
            <Drawer.Trigger>
              <IconButton aria-label="Open menu" variant="ghost" color="white">
                <LucideHamburger />
              </IconButton>
            </Drawer.Trigger>
            
            <Drawer.Backdrop />
            
            <Drawer.Positioner>
              <Drawer.Content bg="blackAlpha.900" backdropFilter="blur(12px)">
                <Drawer.CloseTrigger>
                  <CloseButton size="sm" color="white" />
                </Drawer.CloseTrigger>

                <Drawer.Body>
                  <VStack gap={6} mt={16}>
                    {navLinks.map((link, index) => (
                      <MotionBox key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ delay: index * 0.1 }}>
                        <Link href={link.href} color="gray.300" _hover={{ color: "white", textDecoration: "none" }} fontSize="lg" onClick={(e) => scrollToSection(e, link.href)}>
                          {link.name}
                        </Link>
                      </MotionBox>
                    ))}
                  </VStack>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Drawer.Root>
        </HStack>
      </MotionFlex>
    </>
  )
}