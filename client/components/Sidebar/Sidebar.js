import React from 'react'
import Navigation from './../Navigation'
import NavList from './../NavList'

const Sidebar = (props) => {
  return (
    <Navigation innerRef={props.innerRef} {...props.navStyles}>
      <NavList {...props.navListStyles} clicked={props.clicked} />
    </Navigation>
  )
}

export default Sidebar
