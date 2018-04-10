let express = require('express');

let consign = require('consign');

let body_parser = require('body-parser');

module.exports = ()=> {
    console.log("modulo esta sendo carregado");
    
    let app = express();

    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:true}));
    consign({cwd:'app'})
            .include('infra')
            .then('routes')
            .into(app);

    return app;
}