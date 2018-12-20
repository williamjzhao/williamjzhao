import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Website from './website'
import Login from './login'

class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Website} />
                    <Route path='/login' component={Login} />
                </Switch>
            </main>
        )
    }
}

export default Main;