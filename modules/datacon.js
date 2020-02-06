const mysql = require('mysql');

const db = mysql.createPool({
    host: '192.168.88.216',
    user: 'root',
    password: '123456',
    database: 'ec_dbs',
    debug: false
});

module.exports = db;