let mysql = require('mysql');
function createDBconnection(){
    console.log('asdads');
    return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'assismenina123',
            database : "casadocodigo_nodejs"
        });
}

module.exports = ()=> createDBconnection

