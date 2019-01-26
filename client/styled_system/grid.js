import styled from 'styled-components'

// =================
// CSS GRID
// =================

// DISPLAY
const gridDisplay = 'display: grid'

// GRID TEMPLATE SHORTHAND
const grid = (values='') => `grid: ${values}`

// GRID GAP SHORTHAND
const gridGap = (values='') => `grid-gap: ${values}`

// GRID JUSTIFY ITEMS (ROW AXIS)
const gridJustifyItems = (val='') => `justify-items: ${val}`

// GRID ALIGN ITEMS (BLOCK AXIS)
const gridAlignItems = (val='') => `align-items: ${val}`

// GRID JUSTIFY CONTENT
const gridJustifyContent = (val='') => `justify-content: ${val}`

// GRID ALIGN CONTENT
const gridAlignContent = (val='') => `align-content: ${val}`

// GRID AUTO COLUMNS
const gridAutoColumns = (val='') => `grid-auto-columns: ${val}`

// GRID AUTO ROWS
const gridAutoRows = (val='') => `grid-auto-rows: ${val}`

// GRID AUTO FLOW
const gridAutoFlow = (val='') => `grid-auto-flow: ${val}`

// GRID COLUMN START + END
export const gridColumn = (values='') => `grid-column: ${values}`

// GRID ROW START + END
export const gridRow = (values='') => `grid-row: ${values}`

// GRID AREA
export const gridArea = (val='') => `grid-area: ${val}`

// GRID JUSTIFY SELF
export const gridJustifySelf = (val='') => `justify-self: ${val}`

// GRID ALIGN SELF
export const gridAlignSelf = (val='') => `align-self: ${val}`

// UNIVERSAL GRID STYLES
export const Grid = styled.div`
    ${props => props.display ? gridDisplay : null};
    ${props => props ? grid(props.grid) : null};
    ${props => props ? gridGap(props.gap) : null};
    ${props => props ? gridJustifyItems(props.justifyItems) : null};
    ${props => props ? gridAlignItems(props.alignItems) : null};
    ${props => props ? gridJustifyContent(props.justifyContent) : null};
    ${props => props ? gridAlignContent(props.alignContent) : null};
    ${props => props ? gridAutoColumns(props.autoColumns) : null};
    ${props => props ? gridAutoRows(props.autoRows) : null};
    ${props => props ? gridAutoFlow(props.autoFlow) : null};
`