'use client'

import { Tag, Wrapper } from '@/components/shared/layout'
import * as S from './AboutSection.styles'
import meImg from '@/public/images/me.jpg'
import Image from 'next/image'

export function AboutSection() {
  return (
    <Wrapper>
      <S.Container>
        <S.Column
          css={{
            $$width: '60%',
            paddingRight: '4rem'
          }}
        >
          <Tag text="About" />
          <S.Paragraph>
            <q>
              O aprendizado é contínuo, e o próximo nível nunca será o último
            </q>
            <br />
            <br />
            Olá, meu nome é Gabriel Mendonça Pereira. Programando desde meus 15
            anos com amor por essa área, e hoje com uma imensa vontade de
            compartilhar o que eu estou aprendendo e acabar ajudando alguém
            assim como a programação me ajudou.🚀 Buscando sempre aprimorar e
            aprender nas tecnologias mais utilizadas do mercado.
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
    </Wrapper>
  )
}
