import { createGlobalStyle } from 'styled-components'
import * as t from './typography'
import * as th from './theme'

export const GlobalStyleSheet = createGlobalStyle`
    html {
        height: 100%;
        background: ${th.colorBody};
    }

    body {
        font-family: ${t.fontPrimary};
        font-size: ${t.textBaseSize}
        color: ${th.colorText};
        line-height: ${t.bodyLineHeight};
    }
`