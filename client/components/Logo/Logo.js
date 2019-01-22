import React from 'react'
import { Link } from 'react-router-dom'
import FlexDiv from './../FlexDiv'

const Logo = (props) => {
  return (
      <FlexDiv {...props.styles}>
        <Link to='/'><img width={props.styles.width} src={props.url} alt='logo' /></Link>
      </FlexDiv>
  )
}

export default Logo
