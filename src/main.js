import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Website from './website'
import Login from './login'
import Header from './header';
import Resume from './resume';

class Main extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Website} />
                    <Route path='/login' component={Login} />
                    <Route path='/v2' component={Header} />
                    <Route path='/resume' component={Resume} />
                </Switch>
            </div>
        )
    }
}

export default Main;