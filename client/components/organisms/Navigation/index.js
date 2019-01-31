import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import { styles } from './styles'
import NavigationLinks from './../../molecules/Navigation_links'
import Hamburger from './../../atoms/Hamburger'
import Image from './../../atoms/Image'

const FlexBox = styled(Flex)`
    ${props => props.styles}
`

class Navigation extends Component {

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
    handleDrawer = () => this.state.isOpen ? 
                         this.drawer.current.style.transform = 'translateX(0)' : 
                         this.drawer.current.style.transform = 'translateX(100%)'

    render() {
        return (
            <Fragment>
                <FlexBox {...styles.nav}>
                    <Image {...styles.logo} />    
                    <FlexBox {...styles.ul}>
                        <NavigationLinks {...styles.links} />
                    </FlexBox>
                    {/* Mobile */}
                    <Hamburger {...styles.hamburger} clicked={this.handleOnClick} />
                </FlexBox>
                {/* Mobile */}
                <FlexBox {...styles.drawer} ref={this.drawer}>
                    <FlexBox {...styles.ul_mobile}>
                        <NavigationLinks {...styles.links_mobile} />
                    </FlexBox>
                </FlexBox>
            </Fragment>
        )
    }

}

export default Navigation