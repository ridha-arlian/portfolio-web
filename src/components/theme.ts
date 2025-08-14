import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { textStyles } from '@/components/fonts'

const config = defineConfig({
  theme: {
    textStyles,
    tokens: {
      colors: {
        blue: {
          normal: { value: '#123458' },
          vivid: { value: '#3B82F6' },
          hovers: { value: '#2563EB' },
          
          navbar: { value: '#799EFF' },
        },
        whites: {
          normal: { value: '#EFEEEA' },
          bgs: { value: '#FFFCFB' },
          cards: { value: '#F8F3D9' },
          badges: { value: '#F6E6CB' },
        },
        texts: {
          normal: { value: '#D4C9BE' },
        },
        greens: {
          normal: { value: '#393E46' },
          texts: { value: '#7A7A73' },
          time: { value: '#A9B388' },
        },
        earth: {
          normal: { value: '#754E1A'},
          light: { value: '#CBA35C'},
        }
      },
      gradients: {
        headings: { value: 'linear-gradient(to right, #3B82F6, white)' },
        headingsLogo: { value: 'linear-gradient(to right, #727D73, #948979)' },
        headingsLogos: { value: 'linear-gradient(to right, #4B352A, #CA7842)' },
      }
    },
    semanticTokens: {
      // colors: {
      //   background: {
      //     value: { base: '{colors.whites.bgs}', _dark: 'black' },
      //   },
      //   text: {
      //     value: { base: '{colors.greens.normal}', _dark: 'gray.300' },
      //   },
      //   hovers: {
      //     value: { base: '{colors.blue.vivid}', _dark: '{colors.whites.normal}' },
      //   },
      //   hoversLogo: {
      //     value: { base: '{colors.blue.vivid}', _dark: '{colors.blue.vivid}' },
      //   },
      //   headingsGrads: {
      //     value: { base: '{gradients.headingsLogo}', _dark: '{gradients.headings}' },
      //   },
      // },
    },
    keyframes: {
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)