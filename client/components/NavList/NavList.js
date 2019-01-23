import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import shortid from 'shortid'
import styled from 'styled-components'
import FlexDiv from './../FlexDiv'
import { delay } from './../../helpers/delayLink'

const ListContainer = styled.ul`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};

    ${props => props.sidebar || `@media (max-width: 767px) {
        display: none;
    }`}
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

  const { pathname } = props.location

  const items = props.listItems.map(item => 
    <ListItem onClick={props.clicked} key={shortid.generate()} {...props.listItem}><NavLink to={pathname} onClick={(e) => delay(e, `/${item.replace(/\s/g, '')}`, props.history)} activeStyle={{ color: `${pathname === `/${item.replace(/\s/g, '')}` ? '#FFF8F0' : 'inherit'}` }}>{item.toUpperCase()}</NavLink></ListItem>
  )

  return (
    <ListContainer {...props.container}>
        <FlexDiv {...props.containerFlex}>
            {items}
        </FlexDiv>
    </ListContainer>
  )
}

export default withRouter(NavList)
