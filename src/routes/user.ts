import * as express from 'express'
import User from '../model/employee/User'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await User.get())
})

Router.get('/:id', async (req, res) => {
    res.send(await User.get(req.params.id))
})

Router.post('/new', async (req, res) => {
    const {username, password,fullname,level} = req.body
    let data = await User.insert(username, password, fullname, level)
    if(req.accepts('html'))
        res.redirect('/users')
    else
        res.send(data)
})

export default Router