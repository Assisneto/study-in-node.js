let express = require('express');

let consign = require('consign');

let body_parser = require('body-parser');

let Express_Validator = require('express-validator');

module.exports = ()=> {
    console.log("modulo esta sendo carregado");
    
    let app = express();
    app.use(express.static('./app/public'));

    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    app.use(body_parser.json());
    app.use(Express_Validator());
    app.use(body_parser.urlencoded({extended:true}));
    consign({cwd:'app'})
            .include('infra')
            .then('routes')
            .into(app);

    app.use((req, res, next)=>{
        res.status(404).render("erros/404");
    });

    app.use((error, req, res, next)=>{
    if(process.env.NODE_ENV == 'production') {
            res.status(500).render('erros/500');
            return;
    }
        next(error);
    });
    return app;
}