import { Wrapper } from '@/components/shared/ui'
import Image from 'next/image'
import * as S from './HeroSection.styles'

import arrowDownIcon from '@/public/icons/arrow-down-icon.svg'

export function HeroSection() {
  return (
    <S.Container>
      <Wrapper>
        <S.Title>
          Hello, i am
          <br /> <span>Gabriel</span>, software <br /> developer {`</>`}
        </S.Title>
        <S.ScrollDown>
          <p>scroll down</p>
          <Image
            src={arrowDownIcon}
            alt={'seta para baixo'}
            width={64}
            height={64}
          />
        </S.ScrollDown>
      </Wrapper>
    </S.Container>
  )
}
