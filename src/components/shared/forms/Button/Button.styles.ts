import { styled } from '@/styles/config'
import { Slot } from '@radix-ui/react-slot'

export const Container = styled('button', {
  height: '8rem',
  minWidth: '32rem',
  padding: '3.2rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  fontSize: '$sm',
  fontWeight: 'bold',
  fontFamily: '$display',
  color: '$black',

  cursor: 'pointer',

  transition: 'filter .2s',

  '& > a': {
    color: '$black',
    textDecoration: 'none'
  },

  '&:hover': {
    filter: 'brightness(.8)'
  }
})

export const Icon = styled(Slot, {
  sizes: 26,
  color: '$black'
})
