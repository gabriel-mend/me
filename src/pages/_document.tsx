import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles/config'
import { globalStyles } from '@/styles/global'

export default class Document extends NextDocument {
  render() {
    globalStyles()
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="./icons/origami-icon.svg"
          ></link>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
