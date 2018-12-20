import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Website from './website'
import loginTest from './login'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div>
            <Route path='/' component={Website} />
            <Route path='/login' component={loginTest} />
        </div>
    </BrowserRouter>
    )
  }
}

export default App;