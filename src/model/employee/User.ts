import { employeeConnection as db } from '../../module/database'
import { Result } from 'range-parser';

const _result = { success: false, message: "", error: null }

class User {

    public static async get()
    public static async get(id: Number)

    public static async get(id?: Number) {
        if (id == undefined) {
            return await db('user').select()
        } else {
            return await db('user').select().where({ id })
        }
    }

    public static async insert(username: String, password: String, fullname: String, level: Number) {
        const result = _result
        try {
            const success = await db('user').insert({ username, password, fullname, level })
            if (success.length > 0) {
                result.success = true
                result.message = "Success"
            } else {
                result.message = "Unable to insert new User"
            }
            return result
        } catch (err) {
            throw err
        }
    }

    public static async update(id: Number, username: String, password: String, fullname: String, level: Number) {
        const result = _result
        try {
            const success = await db('user').update({ username, password, fullname, level }).where({ id })
            if (success == 1) {
                result.success = true
                result.message = "Success"
            } else {
                result.message = "Unable to update User "
            }
            return result
        } catch (err) {
            throw err
        }
    }

    public static async delete(id: Number) {
        const result = _result
        try {
            const success = await db('user').delete().where({ id })
            if (success == 1) {
                result.success = true
                result.message = "Success"
            } else {
                result.message = "Unable to Delete User"
            }
            return result
        } catch(err) {
            throw err
        }
    }

}

export default User