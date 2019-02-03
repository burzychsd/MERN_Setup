import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { text, colors } from './../../../styled_system'
import logo from './../../../assets/images/logo.svg'

const Btn = styled.button`
    ${props => props.styles}
`
const Icon = styled.img`
    ${props => props.styles}
`

const Button = ({ button, withIcon, children }) => (
    <Btn {...button}>
        {withIcon.icon && <Icon src={withIcon.iconUrl} alt='btn-icon' styles={withIcon.styles} />}
        {children}
    </Btn>
)

Button.propTypes = {
    button: PropTypes.object,
    withIcon: PropTypes.object
}

Button.defaultProps = {
    button: {
        styles: css`
            width: 150px;
            height: 50px;
            position: relative;
            font-weight: 700;
            font-size: ${text.fluid(14, 18, 320, 1199)};
            text-align: center;
            color: ${colors.LightGray};
            background: ${colors.AccentDark};
            border: none;
            box-shadow: 2px 2px 5px 0px ${colors.AccentLight};
            padding: 0.5em;
            cursor: pointer;

            &:active, :focus {
                outline: none;
            }

            @media (min-width: 1199px) {
                font-size: 18px;
            }
        `
    },
    withIcon: {
        icon: true,
        iconUrl: logo,
        styles: css`
            width: 14px;
            margin: 0 0.5em 0 0;
        `
    }
}

export default Button
