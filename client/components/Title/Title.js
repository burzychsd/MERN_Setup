import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
    font-size: ${props => props.size || '1.85em'};
    color: ${props => props.color || 'rgb(64, 64, 64)'};
    margin: ${props => props.margin || '0 auto'};
    text-align: ${props => props.align || 'center'}
    
`

const Title = ({ title, ...props }) => (
    <Heading {...props}>{title}</Heading>
)

export default Title