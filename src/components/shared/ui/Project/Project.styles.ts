import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  py: '$md',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  borderTop: '1px solid #ffffff',

  '& a': {
    fontSize: '$sm',
    textDecoration: 'underline',
    color: '$white'
  },

  '@bp3': {
    gap: '4rem',
    flexDirection: 'column',

    '& > img': {
      width: '100%',
      objectFit: 'cover',
      height: '18rem'
    },

    '& a': {
      fontSize: '$xs'
    }
  }
})

export const Title = styled('h2', {
  my: '$xs',
  fontSize: '$md',
  color: '$white ',

  '@bp3': {
    fontSize: '$sm'
  }
})

export const Description = styled('p', {
  fontSize: '$sm',
  mb: '$sm',

  '@bp3': {
    fontSize: '$xs'
  }
})

export const Content = styled('div', {
  maxWidth: '50rem'
})

export const Tag = styled('span', {
  display: 'block',
  width: 'fit-content',
  fontSize: '$xxs',
  padding: '0.8rem',
  mb: '$sm',

  color: '$black',
  background: '$white'
})
