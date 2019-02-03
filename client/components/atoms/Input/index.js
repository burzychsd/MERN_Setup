import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { colors, text } from './../../../styled_system'

const InputEl = styled.input`
    ${props => props.styles}
`

const Input = ({ input }) => (
    <InputEl {...input} />
)

Input.propTypes = {
    input: PropTypes.object
}

Input.defaultProps = {
    input: {
        styles: css`
            width: 200px;
            height: 40px;
            padding: 0.5em 1em;
            margin: 1em;
            border: none;
            border-radius: 20px;
            background: ${colors.PrimaryLight};
            font-size: ${text.textSm()};
            outline: none;

            &:focus, :active {
                outline: none;
            }
        `,
        type: 'text',
        name: '',
        placeholder: 'Your text...'
    }
}

export default Input
