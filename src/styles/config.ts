import { createStitches, ScaleValue } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  media: {
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)',
    bp4: '(max-width: 1200px)'
  },
  theme: {
    colors: {
      gray100: '#161616',
      gray200: '#1C1C1C',
      gray400: '#4D4D4D',
      white: '#FFFFFF',
      black: '#000000'
    },
    space: {
      xl: '8.2rem',
      lg: '6.2rem',
      md: '3.2rem',
      sm: '2.4rem',
      xs: '1.2rem'
    },
    fontSizes: {
      lg: '8.2rem',
      md: '3.6rem',
      sm: '2.4rem',
      xs: '1.8rem'
    },
    fonts: {
      display: 'Roboto Mono, sans-serif'
    },
    sizes: {},
    borderWidths: {
      1: '1',
      2: '2'
    },
    zIndices: {}
  },
  utils: {
    m: (value: ScaleValue<'space'> | string) => ({
      margin: value
    }),
    mt: (value: ScaleValue<'space'> | string) => ({
      marginTop: value
    }),
    mr: (value: ScaleValue<'space'> | string) => ({
      marginRight: value
    }),
    mb: (value: ScaleValue<'space'> | string) => ({
      marginBottom: value
    }),
    ml: (value: ScaleValue<'space'> | string) => ({
      marginLeft: value
    }),
    mx: (value: ScaleValue<'space'> | string) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: ScaleValue<'space'> | string) => ({
      marginTop: value,
      marginBottom: value
    }),
    px: (value: ScaleValue<'space'> | string) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: ScaleValue<'space'> | string) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    size: (value: ScaleValue<'sizes'> | string) => ({
      width: value,
      height: value
    }),

    linearGradient: (value: ScaleValue<'colors'> | string) => ({
      background: `linear-gradient(${value})`
    }),

    br: (value: ScaleValue<'space'>) => ({
      borderRadius: value
    })
  }
})

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box'
  },
  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',

    '@bp3': {
      fontSize: '56.25%'
    },
    '@bp2': {
      fontSize: '50%'
    },
    '@bp1': {
      fontSize: '43,75%'
    }
  },
  body: {
    size: '100%',
    overflowX: 'hidden'
  }
})
