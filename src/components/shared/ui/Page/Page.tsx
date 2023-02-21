import { ReactNode } from 'react'
import { Navbar } from '@/components/shared/navigation'

type PageProps = {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return <>{children}</>
}

Page.Navbar = Navbar
