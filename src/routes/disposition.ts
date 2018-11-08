import * as express from 'express'
import Disposition from '../model/employee/Disposition'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await Disposition.get())
})

Router.post('/new', async (req, res) => {
    const { dispositionAt, replyAt, description, notification, status, mailId, userId, dispositionId } = req.body
    res.send(await Disposition.insert(dispositionAt, replyAt, description, notification, status, mailId, userId, dispositionId))
})

Router.get('/:id', async (req, res) => {
    res.send(await Disposition.get(req.params.id))
})

Router.put('/:id/update', async (req, res) => {
    const { dispositionAt, replyAt, description, notification, status, mailId, userId, dispositionId } = req.body
    res.send(await Disposition.update(req.params.id, dispositionAt, replyAt, description, notification, status, mailId, userId, dispositionId))
})

Router.get('/:id/delete', async (req, res) => {
    res.send(await Disposition.delete(req.params.id))
})

export default Router