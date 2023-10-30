import { styled } from '@/styles/config'

export const Container = styled('h2', {
  fontSize: '$sm',
  fontWeight: 'normal',
  transition: 'all 1s',

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
