import { useEffect, useRef, useState } from 'react'
import * as S from './Tag.styles'

export function Tag({ text }: { text: string }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = entries => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: '0px',
      threshold: 1
    })
    if (!containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef])
  return (
    <S.Container
      isVisible={isVisible}
      ref={containerRef}
    >{`<${text}/>`}</S.Container>
  )
}
