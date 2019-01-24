import React from 'react'
import styled from 'styled-components'
import bar from './../../assets/images/bar.svg'

const Container = styled.div`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    display: flex;
    flex-flow: ${props => props.flow || 'column nowrap'};
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'center'};
    margin: ${props => props.margin || '0px'};
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`
const Bar = styled.img`
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '4px'};
`

const Hamburger = (props) => (
    <Container ref={props.innerRef} {...props.container} onClick={props.clicked}>
        <Bar {...props.bar} src={bar} alt='bar' />
        <Bar {...props.bar} src={bar} alt='bar' />
        <Bar {...props.bar} src={bar} alt='bar' />
    </Container>
)

export default Hamburger