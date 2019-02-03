import React, { Component, Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import { global as Global } from './../../styled_system'
import Navigation from './../../components/organisms/Navigation'
import Footer from './../../components/organisms/Footer'
import SideDrawer from './../../components/molecules/SideDrawer'

class Layout extends Component {

    state = {
        isOpen: false
    }

    drawer = React.createRef()

    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.isOpen !== this.state.isOpen) {
            this.handleDrawer()
        }
    }

    handleOnClick = () => this.setState((state) => ({ isOpen: !state.isOpen }))
    handleDrawer = (e) => this.handleElement(e, this.state.isOpen, this.drawer.current, 'transform', 'translateX(0)', 'translateX(100%)')

    handleElement = (e, status, el, cssProp, value1, value2) => 
    status ? el['style'][`${cssProp}`] = value1 : el['style'][`${cssProp}`] = value2

    render() {
        return (
            <Fragment>
                <Global.styles />
                <Normalize />
                <header>
                    <Navigation clicked={this.handleOnClick} />
                </header>
                <main style={{ flex: '1', paddingTop: 64 }}>
                    <SideDrawer innerRef={this.drawer} />
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default Layout