import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import * as S from './Tag.styles'

export function Tag({ text }: { text: string }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return <S.Container isVisible={inView} ref={ref}>{`<${text}/>`}</S.Container>
}
