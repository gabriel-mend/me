import { css, styled } from '@/styles/config'

const WrapperCSS = css({
  height: 'auto',
  marginInline: 'auto',
  position: 'relative',
  zIndex: 999,

  variants: {
    size: {
      full: {
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
        zIndex: 9999
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
