'use client'

import * as S from './Skill.styles'

import { SiReact } from 'react-icons/si'
import { IconType } from 'react-icons'
import { ReactNode } from 'react'

type SkillProps = {
  icon: ReactNode
  title: string
  progress: number
}

export function Skill({ icon, title, progress }: SkillProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SkillProgressContainer>
        <S.SkillProgessBar>
          <S.SkillProgressControl css={{ $$width: `${progress}%` }}>
            {icon}
            <S.SkillProgressCount>{`${progress}%`}</S.SkillProgressCount>
          </S.SkillProgressControl>
        </S.SkillProgessBar>
      </S.SkillProgressContainer>
    </S.Container>
  )
}
