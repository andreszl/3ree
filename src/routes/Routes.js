import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

class routes extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
        </Switch>
      </div>
    )
  }
}


export default routes