import { Wrapper } from '@/components/shared/ui'
import Image from 'next/image'
import * as S from './HeroSection.styles'

import arrowDownIcon from '@/public/icons/arrow-down-icon.svg'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'

export function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
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
        </S.Content>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: '#161616'
              }
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: 'repulse'
                },
                resize: true
              },
              modes: {
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: '#ffffff'
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 5 }
              }
            },
            detectRetina: true
          }}
        />
      </Wrapper>
    </S.Container>
  )
}
