import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ children }) {
  return (
    <Html lang="en">
      <Head>
        <title>Next FSD</title>
      </Head>
      <body>
      {children}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}