import React from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import Link from './../../atoms/Link'
import { flexStyles } from './../../styles/flexbox'
import { spaceLg } from './../../styles/spacing'

const List = styled.ul`
    list-style: none;
    margin: 0 ${spaceLg(20)};
    padding: 0;
    width: ${props => props.width || '260px'};
    height: ${props => props.height || null};

    ${flexStyles({
        justifyContent: 'space-between'
    })}


`

const NavLinks = ({ listItems }) => {

    const items = listItems.map(item => 
        <Link key={shortid.generate()} item={item} shouldDelay={true} />
    )

    return (
        <List>
            {items}
        </List>
    )
}

export default NavLinks
