import express from 'express'
import session from 'express-session'
import ejs from 'ejs'
import knex from 'knex'
import multiparty from 'multiparty'
import parse from 'body-parser'
import moment from 'moment'
import postcss from 'postcss'

const mysql = require('mysql2')
const cssEnv = require('postcss-preset-env')
const tailwind = require('tailwindcss')(process.cwd() + '/tailwind.js')

const app = express()

app.listen('4200', (e) => {
    console.log('Listening on :4200')
})


