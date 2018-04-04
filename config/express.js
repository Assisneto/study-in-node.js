let express = require('express');

let express_load = require('express-load');

module.exports = ()=> {
    console.log("modulo esta sendo carregado");
    
    let app = express();

    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    express_load('routes', {cwd: 'app'})
                .then('infra').into(app);
    
    return app;
}