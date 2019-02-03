import { css } from 'styled-components'
import { colors, text } from './../../../styled_system'

export const styles = {
    footer: {
        as: 'footer',
        styles: css`
            width: 100%;
            height: 50px;
            background: ${colors.Gray3};
            justify-content: space-between;
            align-items: center;
            padding: 0 1.5em;
            z-index: 999;
            flex-shrink: 0;
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

                @media (min-width: 1199px) {
                    font-size: 22px;
                }
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

                @media (min-width: 1199px) {
                    font-size: 12px;
                }
            `
        }
    }
}