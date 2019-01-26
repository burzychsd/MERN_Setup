import { css } from 'styled-components'

// =================
// CSS GRID
// =================

// DISPLAY
const gridDisplay = 'display: grid'

// GRID TEMPLATE SHORTHAND
const grid = (values) => values ? `grid: ${values}` : null

// GRID GAP SHORTHAND
const gridGap = (values) => values ? `grid-gap: ${values}` : null

// GRID JUSTIFY ITEMS (ROW AXIS)
const gridJustifyItems = (val) => val ? `justify-items: ${val}` : null

// GRID ALIGN ITEMS (BLOCK AXIS)
const gridAlignItems = (val) => val ? `align-items: ${val}` : null

// GRID JUSTIFY CONTENT
const gridJustifyContent = (val) => val ? `justify-content: ${val}` : null

// GRID ALIGN CONTENT
const gridAlignContent = (val) => val ? `align-content: ${val}` : null

// GRID AUTO COLUMNS
const gridAutoColumns = (val) => val ? `grid-auto-columns: ${val}` : null

// GRID AUTO ROWS
const gridAutoRows = (val) => val ? `grid-auto-rows: ${val}` : null

// GRID AUTO FLOW
const gridAutoFlow = (val) => val ? `grid-auto-flow: ${val}` : null

// GRID COLUMN START + END
const gridColumn = (values) => values ? `grid-column: ${values}` : null

// GRID ROW START + END
const gridRow = (values) => values ? `grid-row: ${values}` : null

// GRID AREA
const gridArea = (val) => val ? `grid-area: ${val}` : null

// GRID JUSTIFY SELF
const gridJustifySelf = (val) => val ? `justify-self: ${val}` : null

// GRID ALIGN SELF
const gridAlignSelf = (val) => val ? `align-self: ${val}` : null

// UNIVERSAL GRID STYLES
export const styles = (props={}) => css`
    ${gridDisplay};
    ${grid(props.grid)};
    ${gridGap(props.gridGap)};
    ${gridJustifyItems(props.gridJustifyItems)};
    ${gridAlignItems(props.gridAlignItems)};
    ${gridJustifyContent(props.gridJustifyContent)};
    ${gridAlignContent(props.gridAlignContent)};
    ${gridAutoColumns(props.gridAutoColumns)};
    ${gridAutoRows(props.gridAutoRows)};
    ${gridAutoFlow(props.gridAutoFlow)};
`