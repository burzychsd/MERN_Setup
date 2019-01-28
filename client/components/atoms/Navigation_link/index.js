import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({ link, activeClass }) => (
    <NavLink 
        exact to={`${link.includes('home') ? '/' : '/' + link.toLowerCase().replace(/\s/g, '')}`}
        activeStyle={activeClass}>
        {link.toUpperCase()}
    </NavLink>
)

export default NavigationLink