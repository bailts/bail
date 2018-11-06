import * as express from 'express'
import * as session from 'express-session'
import * as ejs from 'ejs'
import * as knex from 'knex'
import * as multiparty from 'multiparty'
import * as bodyParser from 'body-parser'
import * as moment from 'moment'
import * as postcss from 'postcss'

import mailTypeRouter from './routes/mailType'

const mysql = require('mysql2')
const cssEnv = require('postcss-preset-env')
const tailwind = require('tailwindcss')(process.cwd() + '/tailwind.js')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/api/mailType', mailTypeRouter)

app.listen('4200', (e) => {
    console.log('Listening on :4200')
})