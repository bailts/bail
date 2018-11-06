import * as express from 'express'
import MailType from '../model/admin/MailType'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await MailType.get())
})

Router.post('/new', async (req, res) => {
    res.send(await MailType.insert(req.body.type))
})

Router.get('/:id', async (req, res) => {
    res.send(await MailType.get(req.params.id))
})

Router.post('/:id/update', async (req, res) => {
    const { id, type } = req.body
    res.send(await MailType.update(id, type))
})

export default Router