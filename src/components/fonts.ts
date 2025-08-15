import { defineTextStyles } from '@chakra-ui/react'

export const textStyles = defineTextStyles({
  // Heading
  sectionHeading: {
    description: 'For Heading in all Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '28px', sm: '30px', md: '32px', lg: '34px', xl: '36px' },
      lineHeight: { base: '30px', sm: '30px', md: '45px', lg: '50px', xl: '55px' },
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  sectionSubHeading: {
    description: 'For SubHeading in all Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '16px', sm: '16px', md: '18px', lg: '20px', xl: '22px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },


  // Navbar
  navbarBrandLogo: {
    description: 'For Brand Logo in Navbar',
    value: {
      fontFamily: 'var(--font-space-grotesk)',
      fontWeight: '800',
      fontSize: { base: '20px', sm: '24px', md: '28px', lg: '32px', xl: '34px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  navbarText: {
    description: 'For Navigate Text in Navbar',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '24px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },

  // Hero Section
  heroHeading: {
    description: 'For Heading in Hero Section',
    value: {
      fontFamily: 'var(--font-space-grotesk)',
      fontWeight: '800',
      fontSize: { base: '28px', sm: '30px', md: '32px', lg: '34px', xl: '38px' },
      lineHeight: { base: '30px', sm: '25px', md: '45px', lg: '50px', xl: '55px' },
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  heroSubHeading: {
    description: 'For SubHeading in Hero Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '18px', sm: '20px', md: '22px', lg: '24px', xl: '26px' },
      lineHeight: { base: '30px', sm: '20px', md: '22px', lg: '25px', xl: '25px' },
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  buttonHero1: {
    description: 'For button view projects in Hero Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '18px', lg: '18px', xl: '18px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  buttonHero2: {
    description: 'For button contacts me in Hero Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '18px', lg: '18px', xl: '18px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },


  // About
  aboutContent: {
    description: 'For content text in About Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '18px', sm: '20px', md: '22px', lg: '24px', xl: '26px' },
      lineHeight: { base: '30px', sm: '30px', md: '30px', lg: '30px', xl: '30px' },
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },

  // Skills
  skillBadge: {
    description: 'For text skill badge in Skills Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '12px', sm: '14px', md: '16px', lg: '16px', xl: '16px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  showMore: {
    description: 'For text show more in Skills Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '12px', sm: '14px', md: '16px', lg: '16px', xl: '16px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'underline',
      textTransform: 'none',
    },
  },

  // Timeline
  roleTimeline: {
    description: 'For text role card in Timeline Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '16px', sm: '18px', md: '20px', lg: '22px', xl: '24px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  companyTimeline: {
    description: 'For text company card in Timeline Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '18px', lg: '18px', xl: '18px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  detailTimeline: {
    description: 'For text detail card in Timeline Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '12px', sm: '14px', md: '16px', lg: '16px', xl: '16px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  badgeTimeline: {
    description: 'For badge in Timeline Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '14px', lg: '50px', xl: '55px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  

  // Projects
  titleProjects: {
    description: 'For title in Projects Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '16px', sm: '18px', md: '20px', lg: '22px', xl: '22px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  descProjects: {
    description: 'For description in Projects Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '18px', lg: '18px', xl: '18px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  badgeProjects: {
    description: 'For text badge in Projects Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '12px', sm: '14px', md: '14px', lg: '14px', xl: '14px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  
  //Contacts
  contactDetail: {
    description: 'For text detail in Contacts Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '12px', sm: '14px', md: '14px', lg: '16px', xl: '16px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  contactDesc: {
    description: 'For text description in Contacts Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '12px', sm: '14px', md: '14px', lg: '16px', xl: '16px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  contactButton: {
    description: 'For text description in Contacts Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },

  // Footers
  footerButton: {
    description: 'For text button in Footer Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '14px', lg: '20px', xl: '20px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  footerText: {
    description: 'For text button in Footer Section',
    value: {
      fontFamily: 'var(--font-plus-jakarta-sans)',
      fontWeight: '800',
      fontSize: { base: '14px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
      lineHeight: '24px',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  
})