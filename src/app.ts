import * as express from 'express'
import * as session from 'express-session'
import * as ejs from 'ejs'
import * as knex from 'knex'
import * as multiparty from 'multiparty'
import * as bodyParser from 'body-parser'
import * as moment from 'moment'
import * as postcss from 'postcss'
import * as fs from 'fs'
import * as path from 'path'

import mailTypeRouter from './routes/mailType'
import userRouter from './routes/user'
import mailRouter from './routes/mail'
import dispositionRouter from './routes/disposition'
import StaticRouter from './routes/static'
import accountRouter from './routes/account'

const mysql = require('mysql2')
const cssEnv = require('postcss-preset-env')
const SQLSession = require('express-mysql-session')(session)
const tailwind = require('tailwindcss')(process.cwd() + '/tailwind.js')

const sess = session({
    secret: 'onoderawaifuku',
    store: new SQLSession({
        host: 'localhost',
        user: 'root',
        database: 'bail',
    }),
    resave: true,
    saveUninitialized: true
})

const app = express()

async function CreateCSS() {
    let file = fs.readFileSync(process.cwd() + '/main.css', 'utf8')
    css = (await postcss([cssEnv, tailwind]).process(file, { from: process.cwd() + '/main.css' })).css
}

app.use('/static', express.static(path.join(process.cwd(), 'static')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', StaticRouter)
var css: String = ""
app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/view')
app.get('/static/styles/main.css', (req, res) => {
    res.type('css')
    res.send(css)
})

app.use('/api/mailType', mailTypeRouter)
app.use('/api/user', userRouter)
app.use('/api/account', accountRouter)
app.use('/api/mail', mailRouter)
app.use('/api/disposition', dispositionRouter)

app.listen('4200', async (e) => {
    console.log('Listening on :4200')
    await CreateCSS()
})
