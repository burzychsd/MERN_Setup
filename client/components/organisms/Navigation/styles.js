import { css } from 'styled-components'
import { colors, breakpoints, text } from './../../../styled_system'
import { dropDownStyles } from './dropDown_styles'

export const styles = {
    nav: {
        as: 'nav',
        styles: css`
            width: 100%;
            height: 64px;
            position: fixed;
            background: ${colors.Accent};
            justify-content: space-between;
            padding: 0 1.5em;
            align-items: center;
            z-index: 1000;
        `
    },
    ul: {
        as: 'ul',
        styles: css`
            width: 360px;
            height: 100%;
            justify-content: space-between;
            align-items: center;
            list-style: none;

            @media (max-width: ${breakpoints.Sm - 1}px) {
                display: none;
            }
        `
    },
    links: {
        items: [],
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
    dropDown_components: [1, 2 ,3],
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