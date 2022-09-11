import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>MANA Talent Group</title>
        <meta name="description" content="Creator owned Talent Group specializing in Influencer Marketing and Brand Partnerships across Youtube, Twitch and Tiktok." />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-16x16.png"/>
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