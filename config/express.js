let app = require('express')();
app.set('view engine', 'ejs');
module.exports = ()=> {
    console.log("modulo ta sendo carregado");
    return app;
}