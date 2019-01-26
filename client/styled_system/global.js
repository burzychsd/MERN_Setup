import { createGlobalStyle } from 'styled-components'
import * as text from './typography'
import * as colors from './colors'

export const styles = createGlobalStyle`
    html {
        height: 100%;
        background: ${colors.body};
    }

    body {
        font-family: ${text.fontPrimary};
        font-size: ${text.baseSize}
        color: ${colors.text};
        line-height: ${text.bodyLineHeight};
    }
`