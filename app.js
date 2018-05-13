import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, StaticRouter, matchPath  } from 'react-router-dom'
import App from './src/components/App.jsx'
import routes from './src/routes'


const isDev = (process.env.NODE_ENV !== 'production')

export function handleRender(req, res, next) {
    console.log(' [x] Request for', req.url)
    console.log(routes)

     let initialState = {}

    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

        const html = renderToString(
            <StaticRouter location={req.url} context={activeRoute}>
                <App />
            </StaticRouter>
        )
        res.render('index', { html: html, initialState: JSON.stringify(initialState)})


    // Send the rendered page back to the client with the initial state
  }