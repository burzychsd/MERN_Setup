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

    state = {}

    handleOnClick = (e, stateKey) => this.setState((state) => ({ [stateKey]: !state[stateKey] }))

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
                    <Hamburger {...styles.hamburger} clicked={this.props.clicked} />
                </FlexBox>
            </Fragment>
        )
    }
}

export default Navigation