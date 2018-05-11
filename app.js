import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, StaticRouter, matchPath  } from 'react-router-dom'
import App from './src/components/App.jsx'
import routes from './src/routes'


const isDev = (process.env.NODE_ENV !== 'production')

export function handleRender(req, res, next) {
    console.log(' [x] Request for', req.url)
    const state = {}
    console.log(routes)
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path)
        : Promise.resolve()

    promise.then((data) => {
        const context = { data }
        const html = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App initialState={state} />
            </StaticRouter>
        )
        res.render('index', { html: html, initialState: JSON.stringify(state)})
    }).catch(next)

    // Send the rendered page back to the client with the initial state
  }