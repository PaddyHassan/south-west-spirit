import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <title>South West Spirits</title>
        </Head>
        <header>
            <NavBar/>
        </header>
        <main className='main-container'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout