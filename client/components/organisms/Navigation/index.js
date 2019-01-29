import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import { styles } from './styles'
import { breakpoints } from './../../../styled_system'
import NavigationLinks from './../../molecules/Navigation_links'
import Hamburger from './../../atoms/Hamburger'

const FlexBox = styled(Flex)`
    display: flex;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '64px'};
    background: ${props => props.background || 'cyan'};
    position: ${props => props.position || null};
    z-index: ${props => props.zIndex || null};
    margin: ${props => props.margin || null};
    padding: ${props => props.padding || null};
    list-style: ${props => props.listStyle || null};

    @media (max-width: ${breakpoints.Sm - 1}px) {
        display: ${props => props.display || 'flex'};
    }
`

const Navigation = () => (
    <FlexBox {...styles.nav}>
        <FlexBox {...styles.ul}>
            <NavigationLinks {...styles.links} />
        </FlexBox>
        <Hamburger {...styles.hamburger} />
    </FlexBox>
)

export default Navigation
