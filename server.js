'use strict'

// package's
import path from 'path'
import express from 'express'

import http from 'http'
import config from 'config'
import * as uni from './app'


// serve instances
const server = express()
const httpServer = http.createServer(server)
const port = config.get('express.port') || 3000

// setup view engine  
server.set('views',path.join(__dirname,'public','views'))
server.set('view engine', 'ejs')

// static directories 
server.set(express.static(path.join(__dirname,'public')))
server.use(require('serve-static')(path.join(__dirname, config.get('buildDirectory'))))

//Main route
server.get('*',uni.handleRender)

//initialize server
httpServer.listen(port, (err) => {
    console.log(`server running on localhost:${port}...`)
})
