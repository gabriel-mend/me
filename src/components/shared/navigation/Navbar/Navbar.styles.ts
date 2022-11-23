import { styled } from '@/styles/config'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  py: '$md',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Logo = styled('div', {})

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const NavLink = styled('div', {
  position: 'relative',
  fontSize: '$sm',
  opacity: '0.8',

  transition: 'opacity .2s',

  '& + &': {
    ml: 110
  },

  '&:not(&:last-child)::after': {
    content: '',
    width: 35,
    height: 2,
    position: 'absolute',
    right: -75,
    top: '50%',
    transform: 'translateY(-50%)',
    background: '$gray400'
  },

  '& a': {
    color: '$white',
    textDecoration: 'none'
  },

  '&:hover': {
    opacity: '1'
  }
})
