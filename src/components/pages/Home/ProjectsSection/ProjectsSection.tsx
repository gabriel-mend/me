'use client'

import { Tag, Wrapper } from '@/components/shared/layout'
import { Project } from '@/components/shared/layout/Project/Project'
import * as S from './ProjectsSection.styles'

import projectImg from '@/public/images/project-img.png'

export function ProjectsSection() {
  return (
    <Wrapper>
      <S.Container>
        <S.Header>
          <Tag text="Projects" />
          <S.Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </S.Paragraph>
        </S.Header>
        <S.Projects>
          <Project>
            <Project.Image src={projectImg} alt="Image" width={470} />
            <Project.Content>
              <Project.Tag>frontend</Project.Tag>
              <Project.Title>title for the project</Project.Title>
              <Project.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Project.Description>
              <Project.Link href="/">{'> see more'}</Project.Link>
            </Project.Content>
          </Project>
        </S.Projects>
      </S.Container>
    </Wrapper>
  )
}
