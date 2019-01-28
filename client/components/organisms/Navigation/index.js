import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import NavigationLinks from './../../molecules/Navigation_links'
import { styles } from './styles'

const FlexBox = styled(Flex)`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '64px'};
    background: ${props => props.background || 'cyan'};
    position: ${props => props.position || null};
    z-index: ${props => props.zIndex || null};
    margin: ${props => props.margin || null};
    padding: ${props => props.padding || null};
    list-style: ${props => props.listStyle || null};
`

const Navigation = () => (
    <FlexBox {...styles.nav}>
        <FlexBox {...styles.ul}>
            <NavigationLinks {...styles.links}/>
        </FlexBox>
    </FlexBox>
)

export default Navigation
