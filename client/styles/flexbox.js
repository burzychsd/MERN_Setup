import { css } from 'styled-components'

// =================
// FLEXBOX
// =================

// DISPLAY
export const flexDisplay = 'display: flex'

// FLEX SHORTHAND
export const flex  = (values) => values ? `flex: ${values}` : null

// FLEX DIRECTION AND WRAP
export const flexFlow = (flow) => flow ? `flex-flow: ${flow}` : 'flex-flow: row nowrap'

// DISPLAY ORDER
export const order = (val) => val ? `order: ${val}` : null

// FLEX GROW
export const flexGrow = (grow) => grow ? `flex-grow: ${grow}` : null

// FLEX SHRINK
export const flexShrink = (shrink) => shrink ? `flex-shrink: ${shrink}` : null

// FLEX BASIS
export const flexBasis = (width) => width ? `flex-basis: ${width}` : null

// AXIS ALIGNMENT (JUSTIFY CONTAINERS)
export const justifyContent = (justify) => justify ? `justify-content: ${justify}` : 'justify-content: center'

// AXIS ALIGNMENT (JUSTIFY ITEM)
export const justifySelf = (justify) => justify ? `justify-self: ${justify}` : null

// PACKING FLEX LINES
export const alignContent = (align) => align ? `align-content: ${align}` : null

// CROSS-AXIS ALIGNMENT (ALIGN CONTAINERS)
export const alignItems = (align) => align ? `align-items: ${align}` : 'align-items: center'

// CROSS-AXIS ALIGNMENT (ALIGN ITEMS)
export const alignSelf = (align) => align ? `align-self: ${align}` : null

// UNIVERSAL FLEX STYLES
export const flexStyles = (props={}) => css`
    ${flexDisplay};
    ${props => flexFlow(props.flow)};
    ${props => justifyContent(props.justifyContent)};
    ${props => justifySelf(props.justifySelf)};
    ${props => alignContent(props.alignContent)};
    ${props => alignItems(props.alignItems)};
    ${props => alignSelf(props.alignSelf)};
    ${props => flexGrow(props.flexGrow)};
    ${props => flexShrink(props.flexShrink)};
    ${props => flexBasis(props.flexBasis)};
    ${props => order(props.order)};
    ${props => flex(props.flex)};
`