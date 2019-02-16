import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({ link, activeClass, clicked }) => (
    <NavLink 
        exact to={`${link.includes('home') ? '/' : '/' + link.toLowerCase().replace(/\s/g, '')}`}
        activeStyle={activeClass} onClick={clicked}>
        {link.toUpperCase()}
    </NavLink>
)

NavigationLink.propTypes = {
    link: PropTypes.string,
    activeClass: PropTypes.object,
    clicked: PropTypes.func
}

export default NavigationLink