import * as express from 'express'
import * as moment from 'moment'
import User from '../model/employee/User'
import MailType from '../model/admin/MailType'
import Mail from '../model/employee/Mail'

const Static = express.Router()

Static.use((req, res, next) => {
    res.locals.moment = moment
    next()
})

Static.get('/', (req, res) => {
    res.render('index')
})

Static.get('/inbox', async (req, res) => {
    let data = await Mail.get('Inbox')
    res.render('mailbox', {type: 'Masuk', data, ...res.locals})
})

Static.get('/outbox', async (req, res) => {
    let data = await Mail.get('Outbox')
    res.render('mailbox', {type: 'Keluar', data, ...res.locals})
})

Static.get('/inbox/new', (req, res) => {
    res.render('addEditMail', {operation: 'Tambah', data: {}, to: 'Inbox'})
})
Static.get('/outbox/new', (req, res) => {
    res.render('addEditMail', {operation: 'Tambah', data: {}, to: 'Outbox'})
})

Static.get('/mail/:id', (req, res) => {
    res.render('mail')
})

Static.get('/mail/:id/edit', async (req, res) => {
    let data = await Mail.get('Inbox', req.params.id)
    res.render('addEditMail', {operation: 'Edit', data: data[0]})
})

Static.get('/disposition', (req, res) => {
    res.render('despacito')
})

Static.get('/users', async (req, res) => {
    let data = await User.get()
    res.render('user', {users: data})
})

Static.get('/user/new', (req, res) => {
    res.render('addEditUser', {operation: 'Tambah', data: {}})
})

Static.get('/user/:id/edit', async (req, res) => {
    let data = await User.get(req.params.id)
    res.render('addEditUser', {operation: 'Ubah', data: data[0]})
})

Static.get('/mailTypes', async (req, res) => {
    let data = await MailType.get()
    res.render('mailType', {types: data})
})

Static.get('/mailType/new', async (req, res) => {
    res.render('addEditType', {operation: 'Tambah', data: {}})
})
Static.get('/mailType/:id/edit', async (req, res) => {
    let data = await MailType.get(req.params.id)
    res.render('addEditType', {operation: 'Edit', data: data[0]})
})

Static.get('/login', async (req, res) => {
    res.render('login')
})

export default Static