import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import * as S from './Footer.styles'

export function Footer() {
  return (
    <S.Container>
      <S.Title>Siga me:</S.Title>
      <S.SocialMediaGroup>
        <Link href="https://www.linkedin.com/in/gabriel-mendonca-pereira/">
          <SiLinkedin size={24} color="#fff" />
        </Link>
        <Link href="https://www.instagram.com/gabriel._.mend/">
          <SiInstagram size={24} color="#fff" />
        </Link>
        <Link href="https://github.com/gabriel-mend">
          <SiGithub size={24} color="#fff" />
        </Link>
      </S.SocialMediaGroup>
      <S.Hashtag>#neverstoplearning</S.Hashtag>
    </S.Container>
  )
}
