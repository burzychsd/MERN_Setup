import React, { Component, Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import { global as Global } from './../../styled_system'


class Layout extends Component {

    render() {
        const { children } = this.props

        return (
            <Fragment>
                <Normalize />
                <Global.styles />
                {children}
            </Fragment>
        )
    }
}

export default Layout