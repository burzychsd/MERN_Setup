import React from 'react'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'
import styled from 'styled-components'
import FlexDiv from './../FlexDiv'

const ListContainer = styled.ul`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};

    @media (max-width: 767px) {
        display: none;
    }
`
const ListItem = styled.li`
    font-family: ${props => props.fontFamily || 'inherit'};
    font-size: ${props => props.fontSize || 'inherit'};
    font-weight: ${props => props.fontWeight || 'inherit'};
    line-height: ${props => props.lineHeight || 'inherit'};
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};

    & > a {
        color: ${props => props.color || 'inherit'};
    }
    
    & > a:hover {
        color: ${props => props.colorHover || 'inherit'};
    }
`

const NavList = (props) => {

  const items = props.listItems.map(item => 
    <ListItem key={shortid.generate()} {...props.listItem}><NavLink to={`/${item.replace(/\s/g, '')}`} activeStyle={{ color: 'white' }}>{item.toUpperCase()}</NavLink></ListItem>
  )

  return (
    <ListContainer {...props.container}>
        <FlexDiv {...props.containerFlex}>
            {items}
        </FlexDiv>
    </ListContainer>
  )
}

export default NavList
