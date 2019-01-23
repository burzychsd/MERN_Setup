import React from 'react'
import styled from 'styled-components'
import FlexDiv from './../FlexDiv'

const FooterDiv = styled.footer`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  position: ${props => props.position || 'absolute'};
  bottom: 0px;
  z-index: 1000;
`

const Footer = ({ children, ...props }) => {
  return (
    <FooterDiv {...props.container}>
      <FlexDiv {...props.containerFlex}>
        {children}
      </FlexDiv>
    </FooterDiv>
  )
}

export default Footer

