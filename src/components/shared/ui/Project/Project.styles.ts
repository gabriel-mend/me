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
  }
})

export const Title = styled('h2', {
  my: '$xs',
  fontSize: '$md',
  color: '$white '
})

export const Description = styled('p', {
  fontSize: '$sm',
  mb: '$sm'
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
