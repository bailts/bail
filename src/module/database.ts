import * as knex from 'knex'
const config = require(process.cwd() + '/config.js')

const adminConnection = knex({
    client: "mysql",
    connection: {
        host: config.host,
        user: config.admin.user,
        password: config.admin.password,
        database: config.database
    }
})

const employeeConnection = knex({
    client: "mysql",
    connection: {
        host: config.host,
        user: config.employee.user,
        password: config.employee.password,
        database: config.database
    }
})

export { adminConnection, employeeConnection }