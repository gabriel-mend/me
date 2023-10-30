import { styled } from '@/styles/config'

export const Container = styled('div', {
  size: '100%',
  padding: '7.2rem 0 3.2rem',

  position: 'relative',
  zIndex: 999,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.9,

  background: 'url("./images/footer-vector.svg"), $gray200',
  backgroundPosition: 'bottom left',
  backgroundRepeat: 'no-repeat'
})

export const Title = styled('h2', {
  fontSize: '$md',
  mb: '$md'
})

export const SocialMediaGroup = styled('div', {
  display: 'flex',
  gap: 24,
  mb: '$lg'
})

export const Hashtag = styled('p', {
  fontSize: '$xxs',
  textDecoration: 'underline'
})
