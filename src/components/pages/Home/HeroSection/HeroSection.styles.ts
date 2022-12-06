import { styled } from '@/styles/config'

export const Container = styled('main', {
  height: '100vh',

  backgroundImage: 'url(./images/Vector.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',

  '& > div': {
    height: '100%',
    position: 'relative',

    display: 'flex',
    alignItems: 'center'
  }
})

export const Title = styled('h1', {
  fontSize: '$lg',
  fontWeight: 'normal',

  '& > span': {
    px: '2rem',
    backgroundColor: '$gray200'
  }
})

export const ScrollDown = styled('div', {
  position: 'absolute',
  bottom: '8rem',
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& > p': {
    fontSize: '$xxs'
  }
})
