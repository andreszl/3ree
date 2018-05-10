import React from 'react';
import { render } from 'react-dom';
import Routes from './routes'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

render(
  <Routes history={history} />,
  document.getElementById('app')
);