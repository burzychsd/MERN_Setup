import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    display: flex;
    flex-flow: ${props => props.flow || 'row nowrap'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    margin: ${props => props.margin || '0 auto'};
    padding: ${props => props.padding || '0'};
`

const FlexDiv = ({ children, ...props }) => (
    <Container {...props}>
        {children}
    </Container>
)

export default FlexDiv