import { adminConnection as db } from '../../module/database'
import { isNullOrUndefined } from 'util'

class MailType {

    public static async get()
    public static async get(id: Number)

    public static async get(id?: Number) {
        if (id == undefined) {
            return await db('mailtype').select()
        } else {
            return await db('mailtype').select().where({ id })
        }
    }

    public static async insert(type: String) {
        const result = { success: false, message: "", error: null }

        try {
            const success = await db('mailtype').insert({ type })
            if (success.length > 0) {
                result.success = true
                result.message = "Success"
            } else {
                result.message = "Unable to insert new mailType"
            }
            return result
        } catch (err) {
            result.error = err.message
            return result
        }
    }
}

export default MailType