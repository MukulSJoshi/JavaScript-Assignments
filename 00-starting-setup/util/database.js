const mysql = require('mysql2')
const pool= mysql.createPool({
    host: 'localhost',
    user: 'Mukul',
    database: 'node-complete',
    password: 'Mukul@123'
})

module.exports=pool.promise();