import React from 'react'
import styled from 'styled-components'
import FlexDiv from './../FlexDiv'

const NavDiv = styled.nav`
  display: flex;
  flex-flow: ${props => props.flow || 'row nowrap'};
  justify-content: ${props => props.justify || 'space-around'};
  align-items: ${props => props.align || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  position: ${props => props.position || 'absolute'};
  top: ${props => props.top || '0px'};
  bottom: ${props => props.bottom || 'inherit'};
  right: ${props => props.right || 'inherit'};
  left: ${props => props.left || 'inherit'};
  background: ${props => props.background || 'transparent'};
  z-index: ${props => props.zIndex || 1000};
  transform: ${props => props.translate || 'translate(0, 0)'};
  transition: ${props => props.transition || 'all 0.4s ease'}
`

const Navigation = ({ children, ...props }) => (
    <NavDiv ref={props.innerRef} {...props.container}>
            {children}
    </NavDiv>
)

export default Navigation