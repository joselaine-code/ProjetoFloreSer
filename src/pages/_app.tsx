import Head from 'next/head'
import Footer from '../components/footer/Footer'
import NavBar from '../components/nav/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
