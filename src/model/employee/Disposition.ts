import { employeeConnection as db } from '../../module/database'
import { Result } from 'range-parser';

const _result = { status: false, message: "", error: null }

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

    public static async insert(dispositionAt: String, replyAt: String, description: String, notification: String, status: String, mailId: Number, userId: Number, dispositionId: Number) {
        const result = _result
        try {
            let disposition = (await db('disposition').select('id').where({ id: dispositionId }))[0]
            const success = await db('disposition').insert({
                dispositionAt,
                replyAt,
                description,
                notification,
                status,
                mailId: (c) => {
                    return c.select('id').from('mail').where({ id: mailId })
                },
                userId: (c) => {
                    return c.select('id').from('user').where({ id: userId })
                },
                dispositionId: disposition.id || null
            })
            if (success.length > 0) {
                result.status = true
                result.message = "Success"
            } else {
                result.message = "Unable to insert new Disposition"
            }
            return result
        } catch (err) {
            throw err
        }
    }

    public static async update(id: Number, dispositionAt: String, replyAt: String, description: String, notification: String, status: String, mailId: Number, userId: Number, dispositionId: Number) {
        const result = _result
        try {
            let disposition = (await db('disposition').select('id').where({id: dispositionId}))[0]
            const success = await db('disposition').update({
                dispositionAt,
                replyAt,
                description,
                notification,
                status,
                mailId: (c) => {
                    return c.select('id').from('mail').where({ id: mailId })
                },
                userId: (c) => {
                    return c.select('id').from('user').where({ id: userId })
                },
                dispositionId: disposition.id || null
            }).where({ id })
            if (success == 1) {
                result.status = true
                result.message = "Success"
            } else {
                result.message = "Unable to Update Disposition"
            }
            return result
        } catch (err) {
            throw err
        }
    }

    public static async delete(id: Number) {
        const result = _result
        try {
            const success = await db('disposition').del().where({ id })
            if (success == 1) {
                result.status = true
                result.message = "Success"
            } else {
                result.message = "Unable to Delete Mail"
            }
            return result
        } catch (err) {
            throw err
        }
    }

}

export default Disposition