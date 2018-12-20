import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Website from './website'
import loginTest from './login'

class App extends Component {
  render() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Website} />
                <Route path='/login' component={loginTest} />
            </Switch>
        </main>
    )
  }
}

export default App;