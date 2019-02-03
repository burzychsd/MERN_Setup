import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import NavigationLinks from './../../molecules/Navigation_links'
import { colors, breakpoints, text } from './../../../styled_system'

const FlexBox = styled(Flex)`
    ${props => props.styles}
`

const SideDrawer = ({ sideDrawer, innerRef }) => (
    <FlexBox {...sideDrawer.drawer} ref={innerRef}>
        <FlexBox {...sideDrawer.ul}>
            <NavigationLinks {...sideDrawer.links} />
        </FlexBox>
    </FlexBox>
)

SideDrawer.propTypes = {
    sideDrawer: PropTypes.object
}

SideDrawer.defaultProps = {
    sideDrawer: {
        drawer: {
            as: 'nav',
            styles: css`
                width: 280px;
                height: 100%;
                position: fixed;
                right: 0px;
                top: 0px;
                bottom: 0px;
                background: ${colors.PrimaryDark};
                align-items: center;
                transform: translateX(100%);
                transition: transform 0.4s ease-in-out;
                z-index: 998;
                padding: 64px 0 0 0;

                @media (min-width: ${breakpoints.Sm}px) {
                    display: none;
                }
            `
        },
        ul: {
            as: 'ul',
            styles: css`
                width: 100%;
                height: 90%;
                flex-flow: column nowrap;
                align-items: center;
                overflow: auto;
            `
        },
        links: {
            linkItem: {
                styles: css`
                    font-weight: 700;
                    font-size: ${text.fluid(16, 19, 320, 1199)};
                    color: ${colors.Accent};
                    margin: 1em 0;

                    &:first-child {
                        margin-top: 2.5em;
                    }

                    &:last-child {
                        margin-bottom: 2.5em;
                    }
    
                    @media (min-width: 1199px) {
                        font-size: 19px;
                    }
                `
            },
            activeLink: {
                activeClass: {
                    color: `${colors.PrimaryLight}`
                }
            }
        }
    }
}

export default SideDrawer
