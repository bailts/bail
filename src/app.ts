import * as express from 'express'
import * as session from 'express-session'
import * as ejs from 'ejs'
import * as knex from 'knex'
import * as multiparty from 'multiparty'
import * as parse from 'body-parser'
import * as moment from 'moment'
import * as postcss from 'postcss'
import * as fs from 'fs'
import StaticRouter from './routes/static'



const mysql = require('mysql2')
const cssEnv = require('postcss-preset-env')
const SQLSession = require('express-mysql-session')(mysql)
const tailwind = require('tailwindcss')(process.cwd() + '/tailwind.js')

// const sess = session({
//     secret: 'onoderawaifuku',
//     store: new SQLSession({
//         host: 'localhost',
//         user: 'root',
//         database: 'bail'
//     })
// })

const app = express()
app.use('/', StaticRouter)
var css : String = ""
app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/view')

async function CreateCSS()
{
    let file = fs.readFileSync(process.cwd() + '/main.css', 'utf8')
    css = (await postcss([cssEnv, tailwind]).process(file, {from: process.cwd() + '/main.css'})).css

}

app.get('/static/styles/main.css', (req, res) => {
    res.type('css')
    res.send(css)
})

app.listen('4200', async (e) => {
    console.log('Listening on :4200')
    await CreateCSS()
})
