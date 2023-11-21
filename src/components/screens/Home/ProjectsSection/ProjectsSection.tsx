import { Tag, Wrapper, Project } from '@/components/shared/ui'
import * as S from './ProjectsSection.styles'
import { Button } from '@/components/shared/forms'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'

export function ProjectsSection() {
  return (
    <Wrapper id="projects">
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
            <Project.Image
              src="https://media.licdn.com/dms/image/C4D22AQHzjSli4OoZFA/feedshare-shrink_800/0/1668806003277?e=1703116800&v=beta&t=5MPyDkvCfC4DjVDDLOv5cQwM788WsqFUV_JsK2skOtI"
              alt="Image"
              width={470}
              height={300}
            />
            <Project.Content>
              <Project.Tag>frontend</Project.Tag>
              <Project.Title>Me - meu portfólio</Project.Title>
              <Project.Description>
                O objetivo desse projeto e colocar em prática tudo que aprendi e
                vivenciei desde quando comecei na programação, utilizando as
                techs mais recentes que eu tenho domínio. E que eu consiga
                documentar todo o processo de desenvolvimento dessa aplicação.🚀
              </Project.Description>
              <Project.Link
                href="https://github.com/gabriel-mend/me"
                target="_blank"
              >
                Veja mais
              </Project.Link>
            </Project.Content>
          </Project>
          <Project>
            <Project.Image
              src="https://media.licdn.com/dms/image/D4D22AQH-KmCccix0-w/feedshare-shrink_2048_1536/0/1697149953995?e=1703116800&v=beta&t=0n9n_haP0Ul0ZjmNQXjN37_hNTHLv4fkkYHSoISLbDA"
              alt="Image"
              width={470}
              height={300}
            />
            <Project.Content>
              <Project.Tag>eventos</Project.Tag>
              <Project.Title>Startup Weekend</Project.Title>
              <Project.Description>
                Evento de 54 horas onde aprendi muito sobre o ecossistema de
                startups. E também tive oportunidade de conexões admiráveis.
              </Project.Description>
              <Project.Link
                href="https://www.linkedin.com/feed/update/urn:li:activity:7118362877438115840/"
                target="_blank"
              >
                Veja mais
              </Project.Link>
            </Project.Content>
          </Project>
          <Project>
            <Project.Image
              src="https://media.licdn.com/dms/image/D4D22AQGko9A5-VT5sQ/feedshare-shrink_800/0/1698069199584?e=1703116800&v=beta&t=08Ua659D7sVntZIPzptgRHykYz6eim6wba5k4FI4Vow"
              alt="Image"
              width={470}
              height={300}
              objectFit="cover"
            />
            <Project.Content>
              <Project.Tag>backend</Project.Tag>
              <Project.Title>todo-spring</Project.Title>
              <Project.Description>
                Api para todolist com cadastro de usuários e tarefas. Projeto
                desenvolvido durante a Curso de java oferecido pela Rocketseat.
              </Project.Description>
              <Project.Link
                href="https://github.com/gabriel-mend/todolist-spring-boot"
                target="_blank"
              >
                Veja mais
              </Project.Link>
            </Project.Content>
          </Project>
          <Project>
            <Project.Image
              src="https://raw.githubusercontent.com/gabriel-mend/Books-Controller/master/print.png"
              alt="Image"
              width={470}
              height={300}
            />
            <Project.Content>
              <Project.Tag>frontend / backend</Project.Tag>
              <Project.Title>Books-Controller</Project.Title>
              <Project.Description>
                Crud feito para entender os principios do react e backend.
              </Project.Description>
              <Project.Link
                href="https://github.com/gabriel-mend/Books-Controller"
                target="_blank"
              >
                Veja mais
              </Project.Link>
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
