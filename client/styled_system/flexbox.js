import { css } from 'styled-components'

// =================
// FLEXBOX
// =================

// DISPLAY
const flexDisplay = 'display: flex'

// FLEX SHORTHAND
const flex  = (values) => values ? `flex: ${values}` : null

// FLEX DIRECTION AND WRAP
const flexFlow = (flow) => flow ? `flex-flow: ${flow}` : null

// DISPLAY ORDER
const order = (val) => val ? `order: ${val}` : null

// FLEX GROW
const flexGrow = (grow) => grow ? `flex-grow: ${grow}` : null

// FLEX SHRINK
const flexShrink = (shrink) => shrink ? `flex-shrink: ${shrink}` : null

// FLEX BASIS
const flexBasis = (width) => width ? `flex-basis: ${width}` : null

// AXIS ALIGNMENT (JUSTIFY CONTAINERS)
const justifyContent = (justify) => justify ? `justify-content: ${justify}` : null

// AXIS ALIGNMENT (JUSTIFY ITEM)
const justifySelf = (justify) => justify ? `justify-self: ${justify}` : null

// PACKING FLEX LINES
const alignContent = (align) => align ? `align-content: ${align}` : null

// CROSS-AXIS ALIGNMENT (ALIGN CONTAINERS)
const alignItems = (align) => align ? `align-items: ${align}` : null

// CROSS-AXIS ALIGNMENT (ALIGN ITEMS)
const alignSelf = (align) => align ? `align-self: ${align}` : null

// UNIVERSAL FLEX STYLES
export const styles = (props={}) => css`
    ${flexDisplay};
    ${flexFlow(props.flow)};
    ${justifyContent(props.justifyContent)};
    ${justifySelf(props.justifySelf)};
    ${alignContent(props.alignContent)};
    ${alignItems(props.alignItems)};
    ${alignSelf(props.alignSelf)};
    ${flexGrow(props.flexGrow)};
    ${flexShrink(props.flexShrink)};
    ${flexBasis(props.flexBasis)};
    ${order(props.order)};
    ${flex(props.flex)};
`