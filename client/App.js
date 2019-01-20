import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        )
    }
}

export default hot(module)(App)