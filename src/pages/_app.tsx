import '@assets/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="NUTMEG Member Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700&display=swap'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
