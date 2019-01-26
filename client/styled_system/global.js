import { createGlobalStyle } from 'styled-components'
import * as text from './typography'
import * as colors from './colors'

export const styles = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

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

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`