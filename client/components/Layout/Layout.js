import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Navigation from './../Navigation'

const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100%
    }

    body {
        font-family: 'Space Mono', monospace;
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
        <Navigation />
        {children}
    </Fragment>
)

export default Layout