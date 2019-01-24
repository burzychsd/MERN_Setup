import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { delay } from './../../helpers/delayLink'

const Logo = (props) => {

  const Container = styled.div`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    padding: ${props => props.padding || '0px'};
    margin: ${props => props.margin || '0px'};
    cursor: pointer;
  `

  return (
    <Container {...props.container} onClick={props.clicked}>
      <img onClick={(e) => delay(e, '/', props.history)} width={props.width} src={props.url} alt='logo' />
    </Container>
  )
}

export default withRouter(Logo)
