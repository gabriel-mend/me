'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as S from './Navbar.styles'

import logoImg from '@/public/icons/origami-icon.svg'
import { Wrapper } from '../../layout'
import { NavLink } from './NavLink'

export function Navbar() {
  return (
    <Wrapper>
      <S.Container>
        <S.Logo>
          <Link href="#">
            <Image
              src={logoImg}
              alt="Origami de um tsuru"
              width={50}
              height={50}
            />
          </Link>
        </S.Logo>

        <S.Nav>
          <NavLink href="#about">about</NavLink>
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#contact">contact</NavLink>
        </S.Nav>
      </S.Container>
    </Wrapper>
  )
}
