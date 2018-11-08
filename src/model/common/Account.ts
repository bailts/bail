import { adminConnection as db } from '../../module/database'

const _result = { success: false, message: "", error: null }

class Account {
    static async login(username: String, password: String) {
        const result = _result

        try {
            const _password = (await db('user').select(["password"]).where({ username }))[0].password

            if (password == _password) {
                result.success = true
                result.message = 'Success'
            } else {
                result.message = 'Invalid username or password'
            }
            return result
        } catch (err) {
            result.error = err.message
            return result
        }
    }
}

export default Account