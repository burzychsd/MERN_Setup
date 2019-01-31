import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../styled_system/flexbox'
import Text from './../../../components/atoms/Text'
import { styles } from './styles'

const FlexBox = styled(Flex)`
    ${props => props.styles}
`

const Footer = () => (
    <FlexBox {...styles.footer}>
        <Text {...styles.title}>MernStack</Text>
        <Text {...styles.credentials}>&copy; 2019 Sebastian Burzych</Text>
    </FlexBox>
)

export default Footer
