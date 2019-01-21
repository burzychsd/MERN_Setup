import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Navigation from './../Navigation'
import Footer from './../Footer'

const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100%;
        background: #FFF8F0;
    }

    body {
        font-family: 'Space Mono', monospace;
        color: #1E1E24;
    }

    #root {
        position: relative;
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
    }
`

const Layout = ({ children }) => (
    <Fragment>
        <GlobalStyle />
        <header>
            <Navigation />
        </header>
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
)

export default Layout