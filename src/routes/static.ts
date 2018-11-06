import * as express from 'express'

const Static = express.Router()

Static.get('/', (req, res) => {
    res.render('index')
})

Static.get('/inbox', (req, res) => {
    res.render('mailbox', {type: 'Masuk'})
})

Static.get('/outbox', (req, res) => {
    res.render('mailbox', {type: 'Keluar'})
})

Static.get('/mail/new', (req, res) => {
    res.render('addEditMail')
})

Static.get('/mail/:id', (req, res) => {
    res.render('mail')
})

Static.get('/mail/:id/edit', (req, res) => {
    res.render('addEditMail')
})

Static.get('/disposition', (req, res) => {
    res.render('despacito')
})

export default Static