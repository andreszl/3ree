import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../routes'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
         {routes.map(({ path, exact, component: C}) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (<C {...props} />)}
            />
          ))}
        </Switch>
      </div>
    )
  }
}


export default App