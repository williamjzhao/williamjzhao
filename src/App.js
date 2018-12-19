import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router';
import hashHistory from 'react-router-dom';
import Website from './website'
import loginTest from './login'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Website} />
        <Route path='/login' component={loginTest} />
      </Router>
    )
  }
}

export default App;