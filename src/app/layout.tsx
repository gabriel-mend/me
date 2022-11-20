import { ServerStylesheet } from '@/app/ServerStylesSheet'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <ServerStylesheet>{children}</ServerStylesheet>
      </body>
    </html>
  )
}
