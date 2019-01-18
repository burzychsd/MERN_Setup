import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'

class HelloWorld extends Component {
    render() {
        return (
            <Fragment>
                <h1>Mern Setup</h1>
            </Fragment>
        )
    }
}

export default hot(module)(HelloWorld)