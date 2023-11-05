import { Tag, Wrapper, Project } from '@/components/shared/ui'
import * as S from './ProjectsSection.styles'

import projectImg from '@/public/images/project-img.png'
import { Button } from '@/components/shared/forms'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'

export function ProjectsSection() {
  return (
    <Wrapper>
      <S.Container>
        <S.Header>
          <Tag text="Projetos" />
          <S.Paragraph>
            Descubra projetos que representam minha dedicação e habilidades,
            cada um contando uma história única de realização.
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
        <S.GithubButton>
          <Button>
            <Link href="https://github.com/gabriel-mend" target="_blank">
              Mais projetos
            </Link>
            <Button.Icon>
              <SiGithub />
            </Button.Icon>
          </Button>
        </S.GithubButton>
      </S.Container>
    </Wrapper>
  )
}
