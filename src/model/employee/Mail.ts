import { employeeConnection as db } from '../../module/database'

const _result = { success: false, message: "", error: null }

class Mail {
    
    public static async get()
    public static async get(id: Number)

    public static async get(id?: Number) {
        if (id == undefined) {
            return await db('mail').select()
        } else {
            return await db('mail').select().where({ id })
        }
    }

    public static async insert(incomingAt: String, mailCode: Number, mailDate: Date, mailFrom: String, mailTo: String,
        mailSubject: String, description: String, fileUpload: String, status: String, mailTypeId: Number, userId: Number) {
        const result = _result
        try {
            const success = await db('mail').insert({
                incomingAt, 
                mailCode, 
                mailDate, 
                mailFrom, 
                mailTo, 
                mailSubject, 
                description, 
                fileUpload, 
                status,
                mailTypeId: (c) => {
                    return c.select('id').from('mailType').where({id: mailTypeId})
                },
                userId: (c) => {
                    return c.select('id').from('user').where({id: userId})
                }
            })
            if (success.length > 0) {
                result.success = true
                result.message = "Succes"
            } else {
                result.message = "Unable to insert new Mail"
            }
            return result
            } catch (err) {
                throw err
            }
        }

    public static async update(id: Number,incomingAt: String, mailCode: Number, mailDate: Date, mailFrom: String, mailTo: String,
        mailSubject: String, description: String, fileUpload: String, status: String, mailTypeId: Number, userId: Number) {
            const result = _result
            try {
                const success = await db('mail').update({ 
                    incomingAt, 
                    mailCode, 
                    mailDate, 
                    mailFrom, 
                    mailTo, 
                    mailSubject, 
                    description, 
                    fileUpload, 
                    status,
                    mailTypeId: (c) => {
                        return c.select('id').from('mailType').where({id: mailTypeId})
                    },
                    userId: (c) => {
                        return c.select('id').from('user').where({id: userId})
                    } }).where({ id })
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
            const success = await db('mail').del().where({ id })
            if (success == 1) {
                result.success = true
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

export default Mail