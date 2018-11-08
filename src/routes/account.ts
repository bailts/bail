import * as express from 'express'
import Account from '../model/common/Account'

const Router = express.Router()

Router.post('/login', async (req, res) => {
    const { username, password } = req.body
    res.send(await Account.login(username, password))
})

export default Router
