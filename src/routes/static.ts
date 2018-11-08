import * as express from 'express'
import User from '../model/employee/User'

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
    res.render('addEditMail', {operation: 'Tambah', data: {}})
})

Static.get('/mail/:id', (req, res) => {
    res.render('mail')
})

Static.get('/mail/:id/edit', (req, res) => {
    res.render('addEditMail', {operation: 'Edit'})
})

Static.get('/disposition', (req, res) => {
    res.render('despacito')
})

Static.get('/users', async (req, res) => {
    let data = await User.get()
    res.render('user', {users: data})
})

Static.get('/user/new', (req, res) => {
    res.render('addEditUser', {operation: 'Tambah'})
})

export default Static