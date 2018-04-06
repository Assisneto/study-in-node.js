module.exports = (app)=>{ app.get("/produtos", (req, res) => {
    console.log('Listando....')

    let connection = app.infra.connectionFactory();
    let produtosBanco = app.infra.produtosBanco(connection);
    
    produtosBanco.lista((err,results)=>{
        if (err){
            console.log(err);
            }
        res.render('produtos/lista',{listas:results});

            });

    connection.end();

    });
}