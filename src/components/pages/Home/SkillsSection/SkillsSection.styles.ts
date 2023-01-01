import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  py: '12rem',
  background: '$gray200'
})

export const SkillsContainer = styled('div', {
  width: '100%',

  mt: '6.2rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$md'
})
