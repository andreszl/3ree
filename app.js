//pakage
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, StaticRouter, matchPath  } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './src/routes/Routes'

export function handleRender(req, res, next) {
    
    let initialState = {}
    
    const html = renderToString(
        <StaticRouter location={req.url} context={initialState}>
            <Routes/>
        </StaticRouter>
    )
    res.render('index', { html: html, initialState: JSON.stringify(initialState)})
  }