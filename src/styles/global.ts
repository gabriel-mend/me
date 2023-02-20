import { globalCss } from './config'

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
    fontFamily: 'Roboto Mono, monospace',
    overflowX: 'hidden',

    background: '$gray100',
    color: '$white'
  }
})
