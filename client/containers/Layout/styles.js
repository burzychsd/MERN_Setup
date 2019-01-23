import logo from './../../assets/images/logo.svg'

const logoStyles = {
    styles: {
        width: '45px',
        height: '45px',
        padding: '1em 0.5em 0.5em 0.5em',
        margin: '0 1em 0 2em'
    },
    url: `${logo}`
}

const footerStyles = {
    container: {
        height: '50px'
    },
    containerFlex: {
        background: '#1E1E24',
        height: '100%',
        justify: 'space-between'
    }
}

const navStyles = {
    container: {
        height: '64px',
        background: 'rgb(80, 247, 253)',
        borderBottom: '3px solid rgba(128, 128, 128, 0.05)',
        justify: 'space-between'
    }
}

const navListStyles = {
    container: {
        margin: '0 2rem 0 1rem',
        width: '300px'
    },
    containerFlex: {
        justify: 'space-between',
        height: '100%'
    },
    listItems: ['users', 'sign up', 'sign in'],
    listItem: {
        color: 'rgba(30, 30, 36, 0.8)',
        fontWeight: '700',
        fontSize: '20px',
        colorHover: '#FFF8F0'
    },
    activeItem: {
        color: '#FFF8F0'
    }
}

const hamburgerStyles = {
    containerFlex: {
        justify: 'space-between',
        width: '35px',
        height: '25px',
        flow: 'column nowrap',
        margin: '0 2rem 0 1rem'
    },
    bar: {
        width: '35px',
        height: '3px'
    }
}

const titleStyles = {
    fontWeight: 700,
    size: '22px',
    color: '#FFF8F0',
    margin: '0 1rem 0 2rem'
}

const creditsStyles = {
    fontWeight: 700,
    size: '12px',
    color: '#FFF8F0',
    margin: '0 2rem 0 1rem'
}

const sidebarStyles = {
    navStyles: {
        container: {
            position: 'fixed',
            width: '200px',
            height: '100vh',
            bottom: '0px',
            right: '0px',
            justify: 'center',
            background: '#D6EDFF',
            translate: 'translateY(-100%)',
            zIndex: 999
        }
    },
    navListStyles: {
        container: {
            width: '65%',
            height: '50%',
            sidebar: 'display: inherit;'
        },
        containerFlex: {
            flow: 'column nowrap',
            justify: 'space-around'
        },
        listItems: navListStyles.listItems,
        listItem: {
            ...navListStyles.listItem
        },
        activeItem: {
            ...navListStyles.activeItem
        }
    }
}

export {
    logoStyles,
    navListStyles,
    navStyles,
    hamburgerStyles,
    footerStyles,
    titleStyles,
    creditsStyles,
    sidebarStyles
}