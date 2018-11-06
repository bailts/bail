import { employeeConnection as db } from '../../module/database'

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

    // public static async update(username: String, password: String, fullname: String, level: Number) {
    //     try {
    //         const success = await db('user').insert({ username, password, fullname, level })
    //         if (success.length > 0) { }
    //     }
    // }

}

export default User