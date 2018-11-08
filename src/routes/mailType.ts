import * as express from 'express'
import MailType from '../model/admin/MailType'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await MailType.get())
})

Router.post('/new', async (req, res) => {
    let data = await MailType.insert(req.body.type)
    if(req.accepts('html'))
        res.redirect('/mailTypes')
    else res.send(data)
})

Router.get('/:id', async (req, res) => {
    res.send(await MailType.get(req.params.id))
})

Router.post('/:id/update', async (req, res) => {
    let data = await MailType.update(req.params.id, req.body.type)
    if(req.accepts('html'))
        res.redirect('/mailTypes')
    else res.send(data)
})

Router.get('/:id/delete', async (req, res) => {
    let data = await MailType.delete(req.params.id)
    if(req.accepts('html'))
        res.redirect('/mailTypes')
    else res.send(data)
})

export default Router