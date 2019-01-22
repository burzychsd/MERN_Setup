import React from 'react'
import styled from 'styled-components'
import FlexDiv from './../FlexDiv'
import bar from './../../assets/images/bar.svg'

const Container = styled(FlexDiv)`
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
    <Container {...props.containerFlex} onClick={props.clicked}>
        <Bar {...props.bar} src={bar} alt='bar' />
        <Bar {...props.bar} src={bar} alt='bar' />
        <Bar {...props.bar} src={bar} alt='bar' />
    </Container>
)

export default Hamburger