import React from 'react'
import styled from 'styled-components'
import * as th from './../../styles/theme'
import NavLinks from './../../molecules/NavLinks'
import { flexStyles } from './../../styles/flexbox'

const Nav = styled.nav`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '64px'};
    position: ${props => props.position || null};
    top: ${props => props.top || null};
    background: ${props => props.background || th ? th.colorAccent : 'transparent'};
    box-shadow: ${props => props.boxShadow || th ? `0px 1px 2px 0px ${th.colorAccentLight}` : null};
    z-index: 999;

    ${flexStyles({ justifyContent: 'flex-end' })}
`

const Navigation = ({ placement, width, data }) => (
    <Nav {...placement} width={width}>
        <NavLinks {...data} />
    </Nav>
)

export default Navigation
