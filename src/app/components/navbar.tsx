"use client"

import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import { ColorModeButton } from "@/components/ui/color-mode"
import { useColorModeValue } from "@/components/ui/color-mode"
import { GithubLighticons, BurgerLighticons } from "@/components/icons/iconsLightMode"
import { Githubicons, Linkedinicons, Burgericons } from "@/components/icons/iconsDarkMode"
import { Box, Flex, Link, Drawer, VStack, HStack, CloseButton, Button } from "@chakra-ui/react"

const MotionBox = motion.create(Box)
const MotionFlex = motion.create(Flex)

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const Githubmode = useColorModeValue(GithubLighticons, Githubicons)
  const Linkedinmode = useColorModeValue(Linkedinicons, Linkedinicons)
  const Burgermode = useColorModeValue(BurgerLighticons, Burgericons)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#timelines" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <MotionFlex as="nav" position="fixed" top={0} left={0} right={0} zIndex={50} justify="space-between" align="center" px={{ base: 4, md: 8 }} py={ scrolled ? 3 : 5 } bg={ scrolled ? { base: "whites.bgs", _dark: "blackAlpha.800" } : "transparent" } backdropFilter={ scrolled ? "blur(12px)" : "none" } initial={{ y: -100 }} animate={{ y: 0 }} transitionDuration="0.5s">
        <Link href="#home" color={{ base: "greens.normal", _dark: "gray.300" }} textStyle="navbarBrandLogo" _hover={{ textDecoration: "none", color: { base: "blue.vivid", _dark: "blue.vivid" } }} onClick={ (e) => scrollToSection(e, "#home") }>
          RIDHA ARLIAN
        </Link>

        <HStack display={{ base: "none", md: "flex" }} gap={{ base: 2, sm: 4, md: 5, lg: 5, xl: 10 }} align="center">
          {navLinks.map((link) => (
            <Box key={ link.name } position="relative" pb={1} _hover={{ "& .underline" : { width: "100%" } }}>
              <Button variant="ghost" color={{ base: "greens.normal", _dark: "gray.300" }} textStyle="navbarText" _hover={{ bg: "inherit", textDecoration: "none", color: "hovers" }} transition="color 0.3s" onClick={ (e) => scrollToSection(e, link.href) } display="inline-block" p={0} height="auto" minW="unset" asChild>
                <a href={ link.href }>
                  { link.name }
                </a>
              </Button>

              <Box className="underline" position="absolute" bottom={0} left={0} width={0} height="2px" bgGradient={{ _dark: "headings" }} bg={{ base: "earth.normal" }} transition="width 0.3s"/>
            </Box>
          ))}
    
          <HStack gap={{ base: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
            <Button size="sm" boxSize={10} display={{ base: "none", md: "none", lg: "flex" }} aria-label="Linkedin" variant="ghost" bg="inherit" _hover={{ borderColor: { base: "earth.normal", _dark: "blue.navbar" }, transform: "scale(1.2) rotate(5deg)" }} transition="all 0.3s" _active={{ bg: "blue.hovers" }} asChild>
              <a href="https://linkedin.com/in/ridha-arlian" target="blank" rel="noopener noreferrer">
                <Linkedinmode boxSize={5}/>
              </a>
            </Button>
            <Button size="sm" boxSize={10} display={{ base: "none", md: "none", lg: "flex" }} aria-label="GitHub" variant="ghost" bg="inherit" _hover={{ borderColor: { base: "earth.normal", _dark: "blue.navbar" }, transform: "scale(1.2) rotate(5deg)" }} transition="all 0.3s" _active={{ bg: "blue.hovers" }} asChild>
              <a href="https://github.com/ridha-arlian" target="blank" rel="noopener noreferrer">
                <Githubmode boxSize={5}/>
              </a>
            </Button>
            <Button rel="noopener noreferrer" size="sm" boxSize={10} aria-label="" variant="ghost" bg="inherit" _hover={{ borderColor: { base: "earth.normal", _dark: "blue.navbar" }, transform: "scale(1.2) rotate(5deg)" }} transition="all 0.3s" _active={{ borderColor: "blue.hovers" }} asChild>
              <ColorModeButton/>
            </Button>
          </HStack>
        </HStack>

        {/* Mobile Navigation */}
        <HStack display={{ base: "flex", md: "none" }} gap={1}>
          <Button rel="noopener noreferrer" size="sm" boxSize={{ base: 8, sm: 10, md: 10, lg: 10, xl: 10 }} aria-label="" variant="ghost" bg="inherit" _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" } }} asChild>
            <ColorModeButton/>
          </Button>
            
          <Drawer.Root placement="end" open={ isOpen } onOpenChange={ (e) => setIsOpen(e.open) }>
            <Drawer.Trigger asChild>
              <Button variant="ghost" size="sm" boxSize={{ base: 8, sm: 10, md: 10, lg: 10, xl: 10 }} bg="inherit" _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" } }} onClick={ handleOpen }>
                <Burgermode boxSize={7}/>
              </Button>
            </Drawer.Trigger>
              
            <Drawer.Backdrop />
              
            <Drawer.Positioner>
              <Drawer.Content bg={{ base: "whiteAlpha.900", _dark: "blackAlpha.900" }} backdropFilter="blur(12px)">
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="md" color={{ base: "black", _dark: "white" }} boxSize={10} _hover={{ borderColor: { base: "earth.normal", _dark: "blue.hovers" } }}/>
                </Drawer.CloseTrigger>

                <Drawer.Body>
                  <VStack gap={6} mt={16}>
                    {navLinks.map(( link, index ) => (
                      <MotionBox key={ link.name } initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ delay: index * 0.1 }}>
                        <Link href={ link.href } color={{ base: "greens.texts", _dark: "white" }} _hover={{ color: { base: "earth.normal", _dark: "white" }, textDecoration: "none" }} textStyle="roleTimeline" onClick={ (e) => {
                          scrollToSection(e, link.href)
                          handleClose()
                        }}>
                          { link.name }
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