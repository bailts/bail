import * as express from 'express'
import EmployeeUser from '../model/employee/User'
import AdminUser from '../model/admin/User'

const Router = express.Router()

Router.get('/', async (req, res) => {
    res.send(await EmployeeUser.get())
})

Router.post('/new', async (req, res) => {
    const { username, password, fullname, level } = req.body
    let data = await EmployeeUser.insert(username, password, fullname, level)
    if (req.accepts('html'))
        res.redirect('/users')
    else
        res.send(data)
})

Router.get('/:id', async (req, res) => {
    res.send(await EmployeeUser.get(req.params.id))
})

Router.put('/:id/update', async (req, res) => {
    const { username, password, fullname, level } = req.body
    res.send(await EmployeeUser.update(req.params.id, username, password, fullname, level))
})

Router.get('/:id/delete', async (req, res) => {
    res.send(await AdminUser.delete(req.params.id))
})

export default Router