import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3001/api/tumblr')
  const data = await res.json()
  return {
    props: { posts: data.posts }
  }
}

export default function Wow({ posts }) {

  function createMarkup(body) {
    return { __html: body };
  }

  return (
    <div className="container">
      <Head>
        <title>Wow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        {posts.map(post => (
          <div key={post.id}>
            <div dangerouslySetInnerHTML={createMarkup(post.body)} />
            {console.log(post)}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  )
}
