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
        height: '100%'
    }
}

const navStyles = {
    container: {
        height: '64px'
    },
    containerFlex: {
        background: 'rgba(52, 228, 234, 0.4)',
        height: '64px',
        borderBottom: '3px solid rgba(128, 128, 128, 0.05)',
        justify: 'space-between',
    }
}

const navListStyles = {
    container: {
        margin: '0 2em 0 1em',
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
        margin: '0 2em 0 1em'
    },
    bar: {
        width: '35px',
        height: '3px'
    }
}

export {
    logoStyles,
    navListStyles,
    navStyles,
    hamburgerStyles,
    footerStyles
}