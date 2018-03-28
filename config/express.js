let app = require('express')();
app.set('view engine', 'ejs');
app.set('views','./app/views');
module.exports = ()=> {
    console.log("modulo ta sendo carregado");
    return app;
}