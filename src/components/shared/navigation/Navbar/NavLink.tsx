import { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import * as S from './Navbar.styles'

type NavLinkProps = {
  children: ReactNode
} & LinkProps

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <S.NavLink>
      <Link {...rest} passHref>
        {children}
      </Link>
    </S.NavLink>
  )
}
