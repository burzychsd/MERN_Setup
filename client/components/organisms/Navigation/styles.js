import { css } from 'styled-components'
import { colors, breakpoints, text } from './../../../styled_system'
import { dropDownStyles } from './dropDown_styles'

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
            z-index: 1000;
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
            padding: 64px 0 50px 0;
            transform: translateX(100%);
            transition: transform 0.4s ease-in-out;
            z-index: 998;

            @media (min-width: ${breakpoints.Sm}px) {
                display: none;
            }
        `
    },
    ul: {
        as: 'ul',
        styles: css`
            width: 480px;
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
            overflow: auto;

            @media (min-height: 360px) {
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
                font-size: ${text.fluid(16, 19, 320, 1199)};
                color: ${colors.Accent};
                margin: 1em 0;

                @media (min-width: 1199px) {
                    font-size: 19px;
                }
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
    },
    dropDown_components: [1],
    dropDown0: {
        dropDown: {
            ...dropDownStyles,
            dropDown_links: ['users']
        }
    },
    dropDown1: {
        dropDown: {
            ...dropDownStyles,
            dropDown_links: ['sign in']
        }
    },
    dropDown2: {
        dropDown: {
            ...dropDownStyles,
            dropDown_links: ['sign up']
        }
    }

}