'use client'

import { Tag, Wrapper } from '@/components/shared/layout'
import { Skill } from '@/components/shared/layout/Skill/Skill'
import { SiReact } from 'react-icons/si'
import * as S from './SkillsSection.styles'

import vectorImg from '@/public/images/Vector.svg'
import Image from 'next/image'

export function SkillsSection() {
  return (
    <S.Container>
      <Image src={vectorImg} alt="asd" />
      <Wrapper>
        <Tag text="Skills" />
        <S.SkillsContainer>
          <Skill
            title="react js"
            progress={80}
            icon={<SiReact color="#4D4D4D" size={36} />}
          />
          <Skill
            title="next js"
            progress={85}
            icon={<SiReact color="#4D4D4D" size={36} />}
          />
          <Skill
            title="javascript"
            progress={90}
            icon={<SiReact color="#4D4D4D" size={36} />}
          />
          <Skill
            title="html/css"
            progress={99}
            icon={<SiReact color="#4D4D4D" size={36} />}
          />
          <p>#neverstoplearning</p>
        </S.SkillsContainer>
      </Wrapper>
    </S.Container>
  )
}
