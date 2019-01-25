import { css } from 'styled-components'

// =================
// CSS GRID
// =================

// DISPLAY
export const gridDisplay = 'display: grid'

// GRID TEMPLATE SHORTHAND
export const grid = (values) => values ? `grid: ${values}` : null

// GRID GAP SHORTHAND
export const gridGap = (values) => values ? `grid-gap: ${values}` : null

// GRID JUSTIFY ITEMS (ROW AXIS)
export const gridJustifyItems = (val) => val ? `justify-items: ${val}` : null

// GRID ALIGN ITEMS (BLOCK AXIS)
export const gridAlignItems = (val) => val ? `align-items: ${val}` : null

// GRID JUSTIFY CONTENT
export const gridJustifyContent = (val) => val ? `justify-content: ${val}` : null

// GRID ALIGN CONTENT
export const gridAlignContent = (val) => val ? `align-content: ${val}` : null

// GRID AUTO COLUMNS
export const gridAutoColumns = (val) => val ? `grid-auto-columns: ${val}` : null

// GRID AUTO ROWS
export const gridAutoRows = (val) => val ? `grid-auto-rows: ${val}` : null

// GRID AUTO FLOW
export const gridAutoFlow = (val) => val ? `grid-auto-flow: ${val}` : null

// GRID COLUMN START + END
export const gridColumn = (values) => values ? `grid-column: ${values}` : null

// GRID ROW START + END
export const gridRow = (values) => values ? `grid-row: ${values}` : null

// GRID AREA
export const gridArea = (val) => val ? `grid-area: ${val}` : null

// GRID JUSTIFY SELF
export const gridJustifySelf = (val) => val ? `justify-self: ${val}` : null

// GRID ALIGN SELF
export const gridAlignSelf = (val) => val ? `align-self: ${val}` : null

// UNIVERSAL GRID STYLES
export const gridStyles = (props={}) => css`
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