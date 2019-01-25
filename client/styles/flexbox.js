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