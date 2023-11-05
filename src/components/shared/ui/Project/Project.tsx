import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import * as S from './Project.styles'
import { useInView } from 'react-intersection-observer'

type ProjectProps = ComponentProps<typeof S.Container>

export function Project({ children }: ProjectProps) {
  const { inView, ref } = useInView({ threshold: 0.7, triggerOnce: true })
  return (
    <S.Container ref={ref} isVisible={inView}>
      {children}
    </S.Container>
  )
}

Project.Title = S.Title
Project.Image = Image
Project.Tag = S.Tag
Project.Description = S.Description
Project.Link = Link
Project.Content = S.Content
