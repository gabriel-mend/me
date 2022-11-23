'use client'

import { ReactNode } from 'react'
import { Navbar } from '../../navigation'
// import * as S from './Page.styles'

type PageProps = {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return <>{children}</>
}

Page.Navbar = Navbar
