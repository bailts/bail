import * as express from 'express'
import User from '../model/employee/User'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await User.get())
})

Router.post('/new', async (req, res) => {
    const { username, password, fullname, level } = req.body
    res.send(await User.insert(username, password, fullname, level))
})

Router.get('/:id', async (req, res) => {
    res.send(await User.get(req.params.id))
})

Router.put('/:id/update', async (req, res) => {
    const { id, username, password, fullname, level } = req.body
    res.send(await User.update(id, username, password, fullname, level))
})

Router.get('/:id/delete', async (req, res) => {
    res.send(await User.delete(req.params.id))
})

export default Router