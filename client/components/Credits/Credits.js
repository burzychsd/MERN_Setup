import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
    font-family: ${props => props.fontFamily || 'inherit'};
    font-weight: ${props => props.fontWeight || 'inherit'};
    font-size: ${props => props.size || '1.85em'};
    color: ${props => props.color || 'rgb(64, 64, 64)'};
    margin: ${props => props.margin || '0 auto'};
    text-align: ${props => props.align || 'center'};

    @media (max-width: 400px) {
        font-size: ${props => `calc(${props.size} / 1.5)` || '0.8em'};
    }
`

const Credits = ({ credits, ...props }) => (
    <Paragraph {...props}>{credits}</Paragraph>
)

export default Credits