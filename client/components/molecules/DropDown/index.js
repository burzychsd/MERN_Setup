import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import styled, { css } from 'styled-components'
import { text, colors } from './../../../styled_system'
import { Flex } from './../../../styled_system/flexbox'
import NavigationLink from './../../atoms/Navigation_link'
import icon from './../../../assets/images/dropDown_icon.svg'

const LinkItem = styled.li`
    ${props => props.styles}
`
const FlexBox = styled(Flex)`
    ${props => props.styles}
`
const Icon = styled.img`
    ${props => props.styles}
`

const DropDown = ({ dropDown, listItem, clicked, status }) => {

    const links = dropDown.dropDown_links.map(link => 
        <LinkItem key={shortid.generate()} {...dropDown.dropDown_link}>
            <NavigationLink link={link} {...dropDown.dropDown_activeLink} clicked={clicked} />
        </LinkItem>
    )

    return (
        <FlexBox {...dropDown.dropDown_container}>
            <LinkItem {...dropDown.dropDown_item} onClick={clicked}>{listItem.toUpperCase()}
            <span><Icon alt='dropDown_icon' {...dropDown.dropDown_icon} status={status} /></span>
            </LinkItem>
            {status && <FlexBox {...dropDown.dropDown_content}>
                {links}
            </FlexBox>}
        </FlexBox>
    )

}

DropDown.propTypes = {
    listItem: PropTypes.string,
    dropDown: PropTypes.object
}

DropDown.defaultProps = {
    listItem: 'dropDown',
    dropDown: {
        dropDown_container: {
            as: 'ul',
            styles: css`
                flex-flow: column nowrap;
                align-items: center;
                position: relative;
            `
        },
        dropDown_item: {
            styles: css`
                font-weight: 700;
                font-size: ${text.fluid(16, 19, 320, 1199)};
                cursor: pointer;

                @media (min-width: 1199px) {
                    font-size: 19px;
                }
            `
        },
        dropDown_content: {
            as: 'ul',
            styles: css`
                width: calc(100% + 1em);
                flex-flow: column nowrap;
                align-items: center;
                position: absolute;
                top: 64px;
                background: yellow;
                padding: 1em 0.5em;
            `
        },
        dropDown_links: ['users', 'sign in', 'sign up'],
        dropDown_link: {
            styles: css`
                font-weight: 700;
                font-size: ${text.textMd()};
                margin: 0.5em 0;

                &:nth-child(1) {
                    margin: 0 0 0.5em 0;
                }

                &:last-child {
                    margin: 0.5em 0 0 0;
                }
            `
        },
        dropDown_activeLink: {
            activeClass: {
                color: `${colors.PrimaryLight}`
            }
        },
        dropDown_icon: {
            src: icon,
            styles: css`
                width: 15px;
                height: auto;
                margin: 0 0 0 5px;
                transform: ${props => props.status ? 'rotate(180deg)' : 'rotate(0)'};
            `
        }
    }
}

export default DropDown