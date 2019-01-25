import React from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import * as t from './../../styles/typography'
import * as th from './../../styles/theme'
import { breakpointLg } from './../../styles/breakpoints'

const LinkItem = styled.li`
    color: ${props => props.color || 'inherit'};
    font-size: ${props => props.fontSize || t ? t.textLg('0.85em', 1.2) : 'inherit'};
    font-weight: 700;

    & > a {
        text-decoration: none;
        color: ${th ? th.colorLink : 'inherit'};
    }

    @media (min-width: ${breakpointLg}px) {
        &:hover > a {
            color: ${props => props.colorHover || th ? th.colorLinkHover : 'inherit'};
        }
    }
`

const Link = ({ item }) => {
    return (
        <LinkItem>
            <NavLink to={`/${item}`.replace(/\s/g, '').toLowerCase()} activeStyle={{ color: `${th.colorLinkHover}` }}>
                {item.toUpperCase()}
            </NavLink>
        </LinkItem>
    )
}

export default withRouter(Link)