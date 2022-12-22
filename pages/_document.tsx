import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body >
      <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
      </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
