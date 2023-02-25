import { ReactNode } from 'react'
import { Footer, Navbar } from '@/components/shared/navigation'

type PageProps = {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return <>{children}</>
}

Page.Navbar = Navbar
Page.Footer = Footer
