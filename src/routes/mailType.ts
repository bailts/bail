import * as express from 'express'
import MailType from '../model/admin/MailType'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await MailType.get())
})

Router.get('/:id', async (req, res) => {
    res.send(await MailType.get(req.params.id))
})

Router.post('/new', async (req, res) => {
    res.send(await MailType.insert(req.body.type))
})

export default Router