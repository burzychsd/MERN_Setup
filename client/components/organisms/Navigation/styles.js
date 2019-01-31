import { css } from 'styled-components'
import { colors, breakpoints, text } from './../../../styled_system'

export const styles = {
    nav: {
        as: 'nav',
        styles: css`
            width: 100%;
            height: 64px;
            position: absolute;
            background: ${colors.Accent};
            justify-content: space-between;
            padding: 0 1.5em;
            align-items: center;
            z-index: 999;
        `
    },
    drawer: {
        styles: css`
            width: 280px;
            height: 100%;
            position: fixed;
            right: 0px;
            background: ${colors.PrimaryDark};
            align-items: center;
            padding: 64px 0 0 0;
            transform: translateX(100%);
            transition: transform 0.4s ease-in-out;
            overflow: auto;
            z-index: 998;

            @media (min-width: ${breakpoints.Sm}px) {
                display: none;
            }
        `
    },
    ul: {
        as: 'ul',
        styles: css`
            width: 380px;
            height: 100%;
            justify-content: space-between;
            align-items: center;
            list-style: none;

            @media (max-width: ${breakpoints.Sm - 1}px) {
                display: none;
            }
        `
    },
    ul_mobile: {
        as: 'ul',
        styles: css`
            width: 100%;
            height: 100%;
            flex-flow: column nowrap;
            align-items: center;

            @media (min-height: 320px) {
                justify-content: center;
            }
        `
    },
    links: {
        // items: [],
        // linkItem: {
        //     styles: css`

        //     `
        // },
        // activeLink: {
        //     activeClass: {
        //         color: ''
        //     }
        // }
    },
    links_mobile: {
        // items: [],
        linkItem: {
            styles: css`
                font-weight: 700;
                font-size: ${text.fluid(18, 21, 320, 1199)};
                color: ${colors.Accent};
                margin: 1em 0;
            `
        },
        activeLink: {
            activeClass: {
                color: `${colors.PrimaryLight}`
            }
        }
    },
    hamburger: {
        // hamburger_container: {
        //     styles: css`
                
        //     `
        // },
        // hamburger_bars: [],
        // hamburger_bar: {
        //     styles: css`
                
        //     `
        // }
    },
    logo: {
        // path: '',
        // name: '',
        // img: {
        //     styles: css`

        //     `
        // },
        isNavigation: true
    }
}