import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  display: 'flex',
  py: '4rem'
})

export const Paragraph = styled('p', {
  fontSize: '$xs',
  my: '3rem',
  // textAlign: 'justify',

  '& > q': {
    fontSize: '$md',
    fontWeight: 'bold'
  }
})
export const Column = styled('div', {
  width: '$$width',
  height: '100%'
})
