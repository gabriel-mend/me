import { ReactNode } from 'react'
import { ServerStylesheet } from '@/app/ServerStylesSheet'
import { Roboto_Mono } from '@next/font/google'

const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal']
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Me - Gabriel Medonça Pereira | Software Developer</title>
      </head>
      <body style={{ fontFamily: robotoMono.style.fontFamily }}>
        <ServerStylesheet>{children}</ServerStylesheet>
      </body>
    </html>
  )
}
