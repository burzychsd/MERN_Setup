import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import { breakpoints, colors } from './../../../styled_system'
import shortid from 'shortid'

const Container = styled(Flex)`
    ${props => props.styles}
`
const Bar = styled.div`
    ${props => props.styles}
`

const Hamburger = ({ hamburger_container, hamburger_bars, hamburger_bar, clicked }) => {
    const bars = hamburger_bars.map(bar => 
        <Bar key={shortid.generate()} {...hamburger_bar} />
    )

    return (
        <Container {...hamburger_container} onClick={clicked}>
            {bars}
        </Container>
    )
}

Hamburger.defaultProps = {
    hamburger_container: {
        styles: css`
            width: 50px;
            height: 50px;
            padding: 0.7em;
            flex-flow: column nowrap;
            justify-content: space-between;
            align-items: center;
            margin: 0 1em 0 0;
            cursor: pointer;

            @media (min-width: ${breakpoints.Sm}px) {
                display: none;
            }
        `
    },
    hamburger_bars: [1,2,3],
    hamburger_bar: {
        styles: css`
            width: 100%;
            height: 4px;
            background: ${colors.Primary};
        `
    }
}

Hamburger.propsTypes = {
    hamburger_container: PropTypes.object,
    hamburger_bars: PropTypes.array,
    hamburger_bar: PropTypes.object,
    clicked: PropTypes.func
}

export default Hamburger
