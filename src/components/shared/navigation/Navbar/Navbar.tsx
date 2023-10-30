import Image from 'next/image'
import Link from 'next/link'
import * as S from './Navbar.styles'

import logoImg from '@/public/icons/origami-icon.svg'
import { Wrapper } from '../../ui'
import { NavLink } from './NavLink'

import { useNavbarAnimation } from './useNavbarAnimation'

export function Navbar() {
  const { isScroll } = useNavbarAnimation()
  return (
    <S.Container data-scroll-active={isScroll}>
      <Wrapper>
        <S.Logo data-scroll-active={isScroll}>
          <Link href="#">
            <Image src={logoImg} alt="Origami de um tsuru" fill />
          </Link>
        </S.Logo>

        <S.Nav data-scroll-active={isScroll}>
          <NavLink href="#about">sobre</NavLink>
          <NavLink href="#projects">projetos</NavLink>
          <NavLink href="#contact">contato</NavLink>
        </S.Nav>

        {/* <S.Translate data-scroll-active={isScroll}>
          <option value="en">EN</option>
          <option value="pt">PT</option>
        </S.Translate> */}
      </Wrapper>
    </S.Container>
  )
}
