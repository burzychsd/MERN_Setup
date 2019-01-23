import React from 'react'
import { withRouter } from 'react-router-dom'
import FlexDiv from './../FlexDiv'
import { delay } from './../../helpers/delayLink'

const Logo = (props) => {

  return (
      <FlexDiv {...props.styles}>
        <img onClick={(e) => delay(e, '/', props.history)} width={props.styles.width} src={props.url} alt='logo' />
      </FlexDiv>
  )
}

export default withRouter(Logo)
