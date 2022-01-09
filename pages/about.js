import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        <Header title="About" />
        <p className="description">
          image and text here
        </p>
      </main>

      <Footer />
    </div>
  )
}
