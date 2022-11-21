import { ServerStylesheet } from '@/app/ServerStylesSheet'
import { globalStyles } from '@/styles/config'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  globalStyles()
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <ServerStylesheet>{children}</ServerStylesheet>
      </body>
    </html>
  )
}
