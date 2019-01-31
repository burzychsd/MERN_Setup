import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { text } from './../../../styled_system'

const Content = styled.p`
    ${props => props.styles}
`

const Text = ({ children, content }) => (
    <Content {...content}>{children}</Content>
)

Text.propTypes = {
    content: PropTypes.object
}

Text.defaultProps = {
    content: {
        as: 'p',
        styles: css`
            font-size: ${text.fluid(14, 18, 320, 1199)};
            line-height: ${text.bodyLineHeight};
            text-align: center;
        `
    }
}

export default Text


