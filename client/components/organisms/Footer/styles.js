import { css } from 'styled-components'
import { colors, text } from './../../../styled_system'

export const styles = {
    footer: {
        as: 'footer',
        styles: css`
            width: 100%;
            height: 50px;
            position: absolute;
            bottom: 0px;
            background: ${colors.Gray3};
            justify-content: space-between;
            align-items: center;
            padding: 0 1.5em;
        `
    },
    title: {
        content: {
            as: 'h1',
            styles: css`
                color: ${colors.LightGray};
                font-size: ${text.fluid(20, 22, 320, 1199)};
                font-weight: 700;
                text-transform: uppercase;
                margin: 0;
            `
        }
    },
    credentials: {
        content: {
            as: 'p',
            styles: css`
                color: ${colors.LightGray};
                font-size: ${text.fluid(10, 12, 320, 1199)};
                text-align: center;
            `
        }
    }
}