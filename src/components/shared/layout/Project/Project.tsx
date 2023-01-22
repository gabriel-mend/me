'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import * as S from './Project.styles'

type ProjectProps = ComponentProps<typeof S.Container>

export function Project({ children }: ProjectProps) {
  return <S.Container>{children}</S.Container>
}

Project.Title = S.Title
Project.Image = Image
Project.Tag = S.Tag
Project.Description = S.Description
Project.Link = Link
Project.Content = S.Content
