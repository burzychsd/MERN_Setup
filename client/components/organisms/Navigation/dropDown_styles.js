import { css } from 'styled-components'
import { colors, text } from './../../../styled_system'
import icon from './../../../assets/images/dropDown_icon.svg'

export const dropDownStyles = {
    dropDown_container: {
        as: 'ul',
        styles: css`
            flex-flow: column nowrap;
            align-items: center;
            position: relative;
        `
    },
    dropDown_item: {
        styles: css`
            font-weight: 700;
            font-size: ${text.fluid(16, 19, 320, 1199)};
            cursor: pointer;

            @media (min-width: 1199px) {
                font-size: 19px;
            }
        `
    },
    dropDown_content: {
        as: 'ul',
        styles: css`
            width: calc(100% + 1em);
            flex-flow: column nowrap;
            align-items: center;
            position: absolute;
            top: 64px;
            background: ${colors.Gray3};
            padding: 0 0.5em 0.5em 0.5em;
        `
    },
    dropDown_link: {
        styles: css`
            font-weight: 700;
            font-size: ${text.textMd('1em', 1.1)};
            margin: 0.5em 0;

            &:nth-child(1) {
                margin: 0 0 0.5em 0;
            }

            &:last-child {
                margin: 0.5em 0 0 0;
            }
        `
    },
    dropDown_activeLink: {
        activeClass: {
            color: `${colors.PrimaryLight}`
        }
    },
    dropDown_icon: {
        src: icon,
        styles: css`
            width: 15px;
            height: auto;
            margin: 0 0 0 5px;
            transform: ${props => props.status ? 'rotate(180deg)' : 'rotate(0)'};
        `
    }
}