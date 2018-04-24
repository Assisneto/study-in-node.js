module.exports = (app) => {
    app.get("/",(req, res) => {
        let connection = app.infra.connectionFactory();
        let ProdutosBanco = new app.infra.ProdutosBanco(connection);

        ProdutosBanco.lista(function(error,results,fields){
            res.render('home/index',{livros:results});
        });
        connection.end();

    });
}