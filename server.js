
import path from 'path';
import express from 'express'
import http from 'http';
import config from 'config';

const app = express(),
      httpServer = http.createServer(app),
      port = config.get('express.port') || 3000


app
    .set('views', path.join(__dirname, 'public'))
    .set('view engine', 'ejs')

app
    .use(express.static('public'))
    .use(require('serve-static')(path.join(__dirname, config.get('buildDirectory'))))


app.get('*', (req, res) => {res.render('index',{title: 'its work'})})

httpServer.listen(port, (err) => {
    console.log('server running...')
});