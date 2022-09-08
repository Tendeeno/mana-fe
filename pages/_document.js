import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="/fonts/BAHNSCHRIFT.woff2" 
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin=''
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}