import { Wrapper } from '@/components/shared/ui'
import Image from 'next/image'
import * as S from './HeroSection.styles'

import arrowDownIcon from '@/public/icons/arrow-down-icon.svg'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'
import { optionsParticles } from './optionsParticles'

export function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  )
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.Title>
            Olá, eu sou
            <br /> <span>Gabriel</span>, software <br /> developer {`</>`}
          </S.Title>
          <S.ScrollDown>
            <p>scroll down</p>
            <Image
              src={arrowDownIcon}
              alt={'seta para baixo'}
              width={32}
              height={32}
            />
          </S.ScrollDown>
        </S.Content>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={optionsParticles}
        />
      </Wrapper>
    </S.Container>
  )
}
