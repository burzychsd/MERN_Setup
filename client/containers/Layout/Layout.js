import React, { Component, Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Navigation from './../../components/Navigation'
import NavList from './../../components/NavList'
import Footer from './../../components/Footer'
import Logo from './../../components/Logo'
import Hamburger from './../../components/Hamburger'
import { logoStyles,
    navListStyles,
    navStyles,
    hamburgerStyles,
    footerStyles } from './styles'

const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100%;
        min-width: 200px;
        background: #FFF8F0;
    }

    body {
        font-family: 'Space Mono', monospace;
        color: #1E1E24;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    #root {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
    }

    .link_active {
        color: '#FFF8F0'
    }
`

class Layout extends Component {

    state = {
        openNav: false
    }

    handleNavigation = () => this.setState((state) => ({ openNav: !state.openNav }))

    render() {
        const { openNav } = this.state
        return (
            <Fragment>
                <GlobalStyle />
                <header>
                    <Navigation {...navStyles}>
                        <Logo {...logoStyles} />
                        <NavList {...navListStyles} />
                        <Hamburger {...hamburgerStyles} clicked={this.handleNavigation} />
                    </Navigation>
                </header>
                <main style={{ paddingTop: `${navStyles.container.height}` }}>
                    {this.props.children}
                </main>
                <Footer {...footerStyles} />
            </Fragment>
        )
    }
}

export default Layout