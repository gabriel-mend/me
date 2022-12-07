'use client'

import * as S from './Tag.styles'

export function Tag({ text }: { text: string }) {
  return <S.Container>{`<${text}/>`}</S.Container>
}
