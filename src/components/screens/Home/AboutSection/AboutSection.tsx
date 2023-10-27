import { Tag, Wrapper } from '@/components/shared/ui'
import * as S from './AboutSection.styles'
import meImg from '@/public/images/me.jpg'
import Image from 'next/image'

export function AboutSection() {
  return (
    <S.WrapperCustom>
      <S.Container>
        <S.Column
          css={{
            $$width: '60%'
          }}
        >
          <Tag text="Sobre mim" />
          <S.Paragraph>
            Desenvolvendo progamas desde os 15 anos, com muito amor a essa
            profissão. Comecei progamando em python aprendendo algoritmos e
            lógica da programação. Alguns anos depois estudando html/css e
            javascript consegui minha primeira vaga para trabalhar com wordpress
            e reactjs na criação de blogs, landingpages e sistemas. Nela
            consegui aprender sobre o fluxo das aplicações, regras de negócios e
            fazer o layout do figma para o frontend.
            <br />
            <br /> Com o passar do tempo fui para outra vaga onde pude evoluir
            muito profissionalmente,{' '}
            <strong>
              aprendendo sobre tomada decisões, liderança de equipe,
              metodologias ágeis (Scrum, Kanban), comucação efetiva, regras de
              négocios e muitos mais.
            </strong>{' '}
            <br />
            <br />
            Também evoluindo tecnicamente com as tecnologias como:
            <br />
            <strong>
              Nextjs, Reactjs, React Native, Angular, Typescript, Docker,
              Kubernetes, Deploy com CI, Strapi (CMS), Java, Nodejs, UI/UX,
              Figma.
            </strong>
          </S.Paragraph>
        </S.Column>
        <S.Column
          css={{
            $$width: '40%'
          }}
        >
          <Image
            src={meImg}
            alt="Foto do Gabriel Mendonça Pereira"
            width={500}
          />
        </S.Column>
      </S.Container>
    </S.WrapperCustom>
  )
}
