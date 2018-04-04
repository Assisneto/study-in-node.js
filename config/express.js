let express = require('express');

let consign = require('consign');

module.exports = ()=> {
    console.log("modulo esta sendo carregado");
    
    let app = express();

    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    consign({cwd:'app'})
            .include('infra')
            .then('routes')
            .into(app);

    return app;
}