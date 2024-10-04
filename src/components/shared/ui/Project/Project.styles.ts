import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  py: '$md',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  opacity: 0,

  borderTop: '1px solid #ffffff',
  transition: 'all 1.5s',

  '& a': {
    fontSize: '$sm',
    textDecoration: 'underline',
    color: '$white',
    transition: 'all .3s',

    '&:hover': {
      filter: 'brightness(0.6)'
    }
  },

  '& > img': {
    transition: 'all 3s',
    filter: 'grayscale(1)',
    objectFit: 'cover'
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
  },
  variants: {
    isVisible: {
      true: {
        opacity: 1,
        '& > img': {
          filter: 'grayscale(0)'
        }
      }
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
  fontSize: '$xs',
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
