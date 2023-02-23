import { ComponentProps, ReactNode } from 'react'
import * as S from './Button.styles'

type ButtonProps = ComponentProps<typeof S.Container> & {
  children?: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return <S.Container {...props}>{children}</S.Container>
}

Button.Icon = S.Icon
