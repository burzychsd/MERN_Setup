import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import styled, { css } from 'styled-components'
import { text, colors } from './../../../styled_system'
import NavigationLink from './../../atoms/Navigation_link'

const LinkItem = styled.li`
    ${props => props.styles}
`

const NavigationLinks = ({ items, linkItem, activeLink }) => {
    const links = items.map(link => 
        <LinkItem key={shortid.generate()} {...linkItem}>
            <NavigationLink link={link} {...activeLink} />
        </LinkItem>
    )

    return (
        <Fragment>
            {links}
        </Fragment>
    )
}

NavigationLinks.defaultProps = {
    items: ['home', 'users', 'sign in', 'sign up'],
    linkItem: {
        styles: css`
            font-weight: 700;
            font-size: ${text.fluid(16, 21, 320, 1199)};
        `
    },
    activeLink: {
        activeClass: {
            color: `${colors.PrimaryLight}`
        }
    }
}

NavigationLinks.propTypes = {
    items: PropTypes.array,
    linkItem: PropTypes.object,
    activeLink: PropTypes.object
}

export default NavigationLinks
