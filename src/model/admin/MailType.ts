import { adminConnection as db } from '../../module/database'

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
}

export default MailType