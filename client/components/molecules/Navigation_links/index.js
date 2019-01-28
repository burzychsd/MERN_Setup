import React, { Fragment } from 'react'
import shortid from 'shortid'
import styled from 'styled-components'
import NavigationLink from './../../atoms/Navigation_link'

const LinkItem = styled.li`
    font-weight: 700;
    font-size: 21px;
`

const NavigationLinks = ({ items, activeLink }) => {
    const links = items.map(link => 
        <LinkItem key={shortid.generate()}>
            <NavigationLink link={link} {...activeLink} />
        </LinkItem>
    )

    return (
        <Fragment>
            {links}
        </Fragment>
    )
}

export default NavigationLinks
