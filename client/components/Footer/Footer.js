import React from 'react'
import styled from 'styled-components'
import FlexDiv from './../FlexDiv'

const Container = styled(FlexDiv)`
    position: absolute;
    bottom: 0;
    background: #1E1E24;
    height: 50px;
`

const Footer = ({ children }) => {
  return (
    <footer>
      <Container>
        {children}
      </Container>
    </footer>
  )
}

export default Footer

