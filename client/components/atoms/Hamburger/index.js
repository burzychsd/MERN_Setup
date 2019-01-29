import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import { breakpoints } from './../../../styled_system'
import shortid from 'shortid'

const Container = styled(Flex)`
    display: flex;
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || '0px'};
    cursor: pointer;

    @media (min-width: ${breakpoints.Sm}px) {
        display: ${props => props.display || 'none'}
    }
`
const Bar = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '4px'};
    background: ${props => props.background || '#000'};
`

const Hamburger = ({ hamburger_container, hamburger_bars, hamburger_bar }) => {
    const bars = hamburger_bars.map(bar => 
        <Bar key={shortid.generate()} {...hamburger_bar} />
    )

    return (
        <Container {...hamburger_container}>
            {bars}
        </Container>
    )
}

export default Hamburger
