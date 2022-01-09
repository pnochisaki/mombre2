import Link from 'next/link'
import Head from 'next/head'

export default function Navigation({ title }) {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Pacifico" rel="stylesheet" />
    </Head>
      <header className="header">
        <div className="brand">
          <a className="logo" href="/">
            <span>Mombre</span>
          </a>
        </div>
        <button id="menuExpand">
          <img src="/hamburger.svg" alt="menu icon" />
        </button>

        <nav className="navigation">
          <ul>
            <li className="nav-item">
              <Link className="h3 home" href="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="h3 about" href="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="h3 contact" href="/wow">Wow</Link>
            </li>

          </ul>

        </nav>
      </header>
      </>
  )
}
