import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import { Flex } from './../../../styled_system/flexbox'
import { styles } from './styles'
import NavigationLinks from './../../molecules/Navigation_links'
import DropDown from './../../molecules/DropDown'
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

    handleOnClick = (e, stateKey) => this.setState((state) => ({ [stateKey]: !state[stateKey] }))
    handleDrawer = (e) => this.handleElement(e, this.state.isOpen, this.drawer.current, 'transform', 'translateX(0)', 'translateX(100%)')

    handleElement = (e, status, el, cssProp, value1, value2) => 
    status ? el['style'][`${cssProp}`] = value1 : el['style'][`${cssProp}`] = value2

    render() {
        const dropDown_components = styles.dropDown_components ? 
        styles.dropDown_components.map((item, index) => {
            return (
                <DropDown key={shortid.generate()} 
                {...styles[`dropDown${index}`]}
                clicked={(e) => this.handleOnClick(e, `dropDown_isActive${index}`)}
                status={this.state[`dropDown_isActive${index}`]} />
            )
        }) : null

        return (
            <Fragment>
                <FlexBox {...styles.nav}>
                    <Image {...styles.logo} />    
                    <FlexBox {...styles.ul}>
                        <NavigationLinks {...styles.links} />
                        {dropDown_components}
                    </FlexBox>
                    {/* Mobile */}
                    <Hamburger {...styles.hamburger} clicked={(e) => this.handleOnClick(e, 'isOpen')} />
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