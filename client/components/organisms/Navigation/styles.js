export const styles = {
    nav: {
        as: 'nav',
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        zIndex: 999
    },
    ul: {
        as: 'ul',
        width: '400px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 1em 0 0',
        padding: '0.5em',
        listStyle: 'none'
    },
    links: {
        items: ['home', 'users', 'sign in', 'sign up'],
        activeLink: {
            activeClass: {
                color: 'yellow'
            }
        }
    }
}