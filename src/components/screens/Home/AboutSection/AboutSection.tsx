import { Tag } from '@/components/shared/ui'
import * as S from './AboutSection.styles'
import meImg from '@/public/images/file.png'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <S.WrapperCustom id="about">
      <S.Container>
        <S.Column
          css={{
            $$width: '60%'
          }}
        >
          <Tag text="Sobre mim" />
          <S.Paragraph ref={ref} isVisible={inView}>
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
            width={400}
            height={500}
            className="me-image"
          />
        </S.Column>
      </S.Container>
    </S.WrapperCustom>
  )
}
