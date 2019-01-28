import React, { Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import { global as Global } from './../../styled_system'
import Navigation from './../../components/organisms/Navigation'

const Layout = ({ children }) => (
    <Fragment>
        <Global.styles />
        <Normalize />
        <Navigation />
        {children}
    </Fragment>
)

export default Layout