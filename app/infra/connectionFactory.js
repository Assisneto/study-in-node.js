let mysql = require('mysql');
module.exports = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'assismenina123',
    database : "casadocodigo_nodejs"
});