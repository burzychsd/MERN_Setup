import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import defaultImage from './../../../assets/images/logo.svg'

const Img = styled.img`
    ${props => props.styles}
`
const Image = ({ path, name, img, isNavigation }) => (
    isNavigation ? 
    <NavLink to='/' style={{ height: 'inherit' }}>
        <Img src={path} alt={name} {...img} />
    </NavLink> : 
    <Img src={path} alt={name} {...img} />
)

Image.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.object,
    isNavigation: PropTypes.bool
}

Image.defaultProps = {
    path: `${defaultImage}`,
    name: 'default-image',
    img: {
        styles: css`
            width: 64px;
            height: 64px;
            padding: 0.8em 0.5em 0.5em 0.5em;
        `
    },
    isNavigation: false
}

export default Image
