import { styled } from '@/styles/config'

export const Container = styled('header', {
  width: '100%',
  height: '110px',

  position: 'fixed',
  top: 0,
  left: 0,

  transition: 'all .36s',
  borderBottom: '1px solid transparent',

  zIndex: '9999',

  '& > div': {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  '&[data-scroll-active="true"]': {
    height: 90,
    background: 'rgba( 0, 0, 0, 0.35 )',
    backdropFilter: 'blur( 13.5px )',
    borderBottom: '1px solid $gray200'
  }
})

export const Logo = styled('div', {
  width: 50,
  height: 50,

  position: 'relative',
  transition: 'all .36s',

  '&[data-scroll-active="true"]': {
    width: 40,
    height: 40
  }
})

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '&[data-scroll-active="true"]': {
    '& > div': {
      fontSize: '$xxs'
    }
  },

  '@bp3': {
    display: 'none'
  }
})

export const NavLink = styled('div', {
  position: 'relative',
  fontSize: '$xs',
  opacity: '0.8',

  transition: 'all .36s',

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

export const Translate = styled('select', {
  fontSize: '$xxs',
  color: '$white',

  border: 'none',
  background: 'transparent',

  transition: 'all .36s',

  '&[data-scroll-active="true"]': {
    fontSize: '1.4rem'
  }
})
