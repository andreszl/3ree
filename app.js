//pakage
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, StaticRouter, matchPath  } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './src/routes/Routes'

export function handleRender(req, res, next) {
    console.log(' [x] Request for', req.url)
        
        let initialState = {}

        const html = renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        )
        res.render('index', { html: html, initialState: JSON.stringify(initialState)})


    // Send the rendered page back to the client with the initial state
  }