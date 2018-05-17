
import React from 'react'
import Routes from './routes'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './components/App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducer  from './reducers'
import { getOrSetUserId } from '../utils/UserId';
import * as actions from './actions/index';

const store = createStore(reducer)


hydrate(
  <Provider store={store}>
    <Router >
      <App initialState={window.__INITIAL_STATE__}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

store.dispatch(actions.setUserId(getOrSetUserId()));