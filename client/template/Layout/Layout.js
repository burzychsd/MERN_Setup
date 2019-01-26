import React, { Component, Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import { global as Global } from './../../styled_system'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Flex } from './../../styled_system/flexbox'
import shortid from 'shortid'

const FlexBox = styled(Flex)`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '64px'};
    background: ${props => props.background || 'cyan'};
    position: ${props => props.position || null};
    z-index: ${props => props.zIndex || null};
    margin: ${props => props.margin || null};
    padding: ${props => props.padding || null};
    list-style: ${props => props.listStyle || null};
`

const LinkItem = styled.li`
    font-weight: 700;
    font-size: 21px;
`


class Layout extends Component {

    styles = {
        nav: {
            as: 'nav',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            zIndex: 999
        },
        ul: {
            as: 'ul',
            width: '400px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 1em 0 0',
            padding: '0.5em',
            listStyle: 'none'
        },
        links: ['home','users', 'sign up', 'sign in'],
        link: {
            activeStyle: {
                color: 'yellow'
            }
        }
    }

    render() {
        const { styles } = this
        const { children } = this.props
        const items = styles.links.map(link => 
            <LinkItem key={shortid.generate()}>
                <NavLink 
                exact to={`${link.includes('home') ? '/' : '/' + link.toLowerCase().replace(/\s/g, '')}`} {...styles.link}>
                    {link.toUpperCase()}
                </NavLink>
            </LinkItem>
        )

        return (
            <Fragment>
                <Global.styles />
                <Normalize />
                <FlexBox {...styles.nav}>
                    <FlexBox {...styles.ul}>
                        {items}
                    </FlexBox>
                </FlexBox>
                {children}
            </Fragment>
        )
    }
}

export default Layout