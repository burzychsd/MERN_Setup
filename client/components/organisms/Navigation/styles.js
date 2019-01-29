import { colors } from './../../../styled_system'

export const styles = {
    nav: {
        as: 'nav',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999
    },
    ul: {
        as: 'ul',
        width: '400px',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 1em 0 0',
        padding: '0.5em',
        listStyle: 'none',
        display: 'none'
    },
    links: {
        items: ['home', 'users', 'sign in', 'sign up'],
        activeLink: {
            activeClass: {
                color: 'yellow'
            }
        }
    },
    hamburger: {
        hamburger_container: {
            width: '50px',
            height: '50px',
            padding: '0.7em',
            flow: 'column nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'none',
            margin: '0 1em 0 0'
        },
        hamburger_bars: [1,2,3],
        hamburger_bar: {
            background: `${colors.Primary}`
        }
    }
}