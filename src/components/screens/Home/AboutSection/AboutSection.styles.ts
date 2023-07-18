import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  display: 'flex',
  py: '4rem',
  gap: '4rem',

  '@bp3': {
    flexDirection: 'column'
  }
})

export const Paragraph = styled('p', {
  fontSize: '$xs',
  my: '3rem',

  '& > q': {
    fontSize: '$md',
    fontWeight: 'bold'
  }
})

export const Column = styled('div', {
  width: '$$width',
  height: '100%',

  '@bp3': {
    width: '100%',

    '& > img': {
      width: '100%',
      height: '300px',
      objectFit: 'cover'
    }
  }
})
