module.exports = (app)=>{ app.get("/produtos", (req, res) => {
    console.log('Listando....')

    let connection = app.infra.connectionFactory();
    let ProdutosBanco = new app.infra.ProdutosBanco(connection);
    
    ProdutosBanco.lista((err,results)=>{
        if (err){
            console.log(err);
            }
        res.render('produtos/lista',{listas:results});

            });

    connection.end();

    }); 
    app.get("/produtos/form",(req, res) => {
        res.render('produtos/form');
    });
}