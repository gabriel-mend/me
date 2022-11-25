import { useEffect, useState } from 'react'

export function useNavbarAnimation() {
  const [isScroll, setIsScroll] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      if (scrollPosition !== 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [scrollPosition])

  return {
    isScroll
  }
}
