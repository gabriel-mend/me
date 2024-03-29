import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  py: '$xl'
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@bp3': {
    gap: '3rem',
    flexDirection: 'column'
  }
})

export const Paragraph = styled('p', {
  fontSize: '$xs',
  maxWidth: '36rem'
})

export const Projects = styled('div', {
  borderBottom: '1px solid #ffffff',
  mt: '$xl'
})

export const GithubButton = styled('div', {
  mt: '$xl',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
