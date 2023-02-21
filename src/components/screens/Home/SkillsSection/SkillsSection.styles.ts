import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  py: '12rem',
  background: '$gray200',

  position: 'relative',
  '& p': {
    fontSize: '1.8rem'
  },

  '& > img': {
    position: 'absolute',
    top: 0,
    right: 0
  }
})

export const SkillsContainer = styled('div', {
  width: '100%',

  mt: '6.2rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$md',
  zIndex: 9
})
