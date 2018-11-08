import { employeeConnection as db } from '../../module/database'

class Disposition {
    public static async get()
    public static async get(id: Number)

    public static async get(id?: Number) {
        if (id == undefined) {
            return await db('disposition').select()
        } else {
            return await db('disposition').select().where({ id })
        }
    }
}

export default Disposition