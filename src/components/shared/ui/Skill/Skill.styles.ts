import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  zIndex: '$surface'
})

export const Title = styled('p', {
  mb: '$xs',
  fontSize: '$sm'
})

export const SkillProgressContainer = styled('div', {
  padding: '3.2rem',
  background: '$gray100'
})

export const SkillProgessBar = styled('div', {
  width: '100%',
  height: '5.6rem',

  background: '$gray200'
})

export const SkillProgressControl = styled('div', {
  width: '$$width',
  height: '100%',
  px: '$xs',

  background: '$white',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const SkillProgressCount = styled('p', {
  fontSize: '$xs',
  color: '$gray400'
})
