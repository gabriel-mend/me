'use client'

import React, { ReactNode } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText, globalStyles } from '@/styles/config'

export function ServerStylesheet({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    if (typeof window === 'undefined') {
      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      )
    }
  })

  globalStyles()
  return <>{children}</>
}
