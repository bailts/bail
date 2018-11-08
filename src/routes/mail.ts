import * as express from 'express'
import Mail from '../model/employee/Mail'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await Mail.get())
})

Router.post('/new', async (req, res) => {
    const { incomingAt, mailCode, mailDate, mailFrom, mailTo, mailSubject, description, fileUpload, status, mailTypeId, userId } = req.body
    res.send(await Mail.insert(incomingAt, mailCode, mailDate, mailFrom, mailTo, mailSubject, description, fileUpload, status, mailTypeId, userId))
})

Router.get('/:id', async (req, res) => {
    res.send(await Mail.get(req.params.id))
})

Router.put('/:id/update', async (req, res) => {
    const { incomingAt, mailCode, mailDate, mailFrom, mailTo, mailSubject, description, fileUpload, status, mailTypeId, userId } = req.body
    res.send(await Mail.update(req.params.id, incomingAt, mailCode, mailDate, mailFrom, mailTo, mailSubject, description, fileUpload, status, mailTypeId, userId))
})

Router.get('/:id/delete', async (req, res) => {
    res.send(await Mail.delete(req.params.id))
})

export default Router