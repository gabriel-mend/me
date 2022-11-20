'use client'

import { styled } from '@/styles/config'
import { ReactNode } from 'react'

const Button1 = styled('button', {
  color: 'blue',
  borderRadius: '100px'
})

export function Button({ children }: { children: ReactNode }) {
  return <Button1>{children}</Button1>
}
