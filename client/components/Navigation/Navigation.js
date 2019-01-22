import React from 'react'
import styled from 'styled-components'
import FlexDiv from './../FlexDiv'

const NavDiv = styled.nav`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  position: ${props => props.position || 'absolute'};
  top: 0px;
  z-index: 999;
`

const Navigation = ({ children, ...props }) => (
    <NavDiv {...props.container}>
        <FlexDiv {...props.containerFlex}>
            {children}
        </FlexDiv>
    </NavDiv>
)

export default Navigation