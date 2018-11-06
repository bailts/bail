import * as express from 'express'
import MailType from '../model/admin/MailType'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await MailType.get())
})

Router.get('/:id', async (req, res) => {
    res.send(await MailType.get(req.params.id))
})

export default Router