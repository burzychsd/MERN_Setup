import React, { Component, Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Navigation from './../../components/Navigation'
import NavList from './../../components/NavList'
import Footer from './../../components/Footer'
import Logo from './../../components/Logo'
import Hamburger from './../../components/Hamburger'
import Title from './../../components/Title'
import Credits from './../../components/Credits'
import Sidebar from './../../components/Sidebar'
import { logoStyles,
    navListStyles,
    navStyles,
    hamburgerStyles,
    footerStyles,
    titleStyles,
    creditsStyles,
    sidebarStyles } from './styles'

const GlobalStyle = createGlobalStyle`
    * {
        -webkit-tap-highlight-color: transparent;
    }

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

    .nav_active {
        transform: translateY(0);
        transition: all 0.4s ease;
    }
`

class Layout extends Component {


    state = {
        openNav: false,
    }

    sidebar = React.createRef()
    hamburger = React.createRef()

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.openNav !== this.state.openNav) {
            this.sidebar.current.classList.toggle('nav_active')
        }
    }
    handleNavigation = () => this.hamburger.current ? this.setState((state) => ({ openNav: !state.openNav })) : null
    handleHomeLogo = () => this.state.openNav ? this.setState((state) => ({ openNav: !state.openNav })) : null

    render() {
        const { width } = this.state
        return (
            <Fragment>
                <GlobalStyle />
                <header>
                    <Navigation {...navStyles}>
                        <Logo {...logoStyles} clicked={this.handleHomeLogo} />
                        <NavList {...navListStyles} />
                        <Hamburger innerRef={this.hamburger} {...hamburgerStyles} clicked={this.handleNavigation} />
                    </Navigation>
                    <Sidebar innerRef={this.sidebar} clicked={this.handleNavigation} {...sidebarStyles} />
                </header>
                <main style={{ paddingTop: `${navStyles.container.height}` }}>
                    {this.props.children}
                </main>
                <Footer {...footerStyles}>
                    <Title {...titleStyles} title='MERNStack' />
                    <Credits {...creditsStyles} credits='&copy; 2019 Sebastian Burzych' />
                </Footer>
            </Fragment>
        )
    }
}

export default Layout