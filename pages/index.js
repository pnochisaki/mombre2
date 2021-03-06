import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      
      <Navigation />

      <main>
        <Header title="Mombre" />
        <p className="description">
          image and text here
        </p>
      </main>

      <Footer />
    </div>
  )
}
