import { css, styled } from '@/styles/config'

const WrapperCSS = css({
  height: 'auto',
  marginInline: 'auto',

  variants: {
    size: {
      full: {
        width: '100%',
        maxWidth: '100%'
      },
      default: {
        width: '90%',
        maxWidth: '121.6rem'
      }
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export const Wrapper = styled('div', WrapperCSS)
