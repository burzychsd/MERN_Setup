import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './template/Layout'
import Home from './pages/Home'
import Users from './pages/Users'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

class MainRouter extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={Users} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                </Switch>
            </Layout>
        )
    }
}

export default MainRouter