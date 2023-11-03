import { Wrapper } from '@/components/shared/ui'
import { styled } from '@/styles/config'

export const Container = styled(Wrapper, {
  size: '100%',
  display: 'flex',
  py: '4rem',
  gap: '4rem',

  '@bp3': {
    flexDirection: 'column'
  }
})

export const WrapperCustom = styled('div', {
  width: '100%',
  background: 'rgba(0, 0, 0,0.7)',
  zIndex: 999,
  position: 'relative',
  color: '$white'
})

export const Paragraph = styled('p', {
  fontSize: '$xs',
  my: '3rem',
  transition: 'all 0.7s',

  '& > q': {
    fontSize: '$md',
    fontWeight: 'bold'
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transform: 'translatex(0px)'
      },
      false: {
        opacity: 0,
        transform: 'translatex(-20px)'
      }
    }
  }
})

export const Column = styled('div', {
  width: '$$width',
  height: '100%',

  '& > img': {
    objectFit: 'cover',
    borderRadius: 4
  },

  '@bp4': {
    width: '100%',

    '& > img': {
      width: '100%',
      height: '300px',
      objectFit: 'cover'
    }
  }
})
