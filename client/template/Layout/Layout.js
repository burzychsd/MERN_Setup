import React, { Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import { global as Global } from './../../styled_system'
import Navigation from './../../components/organisms/Navigation'
import Footer from './../../components/organisms/Footer'

const Layout = ({ children }) => (
    <Fragment>
        <Global.styles />
        <Normalize />
        <header>
            <Navigation />
        </header>
        <main style={{ paddingTop: 64 }}>
            {children}
        </main>
        <Footer />
    </Fragment>
)

export default Layout