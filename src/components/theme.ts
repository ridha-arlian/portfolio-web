import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { textStyles } from '@/components/fonts'

const config = defineConfig({
  theme: {
    textStyles,
    // breakpoints: {
    //   sm: '320px',
    //   md: '768px',
    //   lg: '960px',
    //   xl: '1200px',
    // },
    tokens: {
      colors: {
        blue: {
          normal: { value: '#123458' },
          vivid: { value: '#3B82F6' },
          hovers: { value: '#2563EB' },
          gradient1: { value: '#03346E' },
          gradient2: { value: '#6EACDA' },
          navbar: { value: '#799EFF' },
        },
        whites: {
          normal: { value: '#EFEEEA' },
        },
        texts: {
          normal: { value: '#D4C9BE' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brown: {
          solid: { value: '{colors.brown.500}' },
          contrast: { value: '{colors.brown.50}' }, // Warna teks di atas solid
          fg: { value: '{colors.brown.500}' }, // Foreground untuk teks, ikon
          muted: { value: '{colors.brown.100}' },
          subtle: { value: '{colors.brown.200}' },
          emphasized: { value: '{colors.brown.300}' },
          focusRing: { value: '{colors.brown.500}' },
        },
      },
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