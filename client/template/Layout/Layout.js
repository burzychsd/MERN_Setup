import React, { Component, Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import { GlobalStyleSheet } from './../../styles/global'
import Navigation from './../../organisms/Navigation'


class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Normalize />
                <GlobalStyleSheet />
                    <header>
                        <Navigation placement={{ position: 'absolute', top: '0px' }} 
                        data={{ listItems: ['Users', 'Sign up', 'Sign In'] }} />
                    </header>
            </Fragment>
        )
    }
}

export default Layout