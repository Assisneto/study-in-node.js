module.exports =(app) => {
    app.get("/promocoes/form", (req,res)=> {
        let connection = app.infra.connectionFactory();
        let produtoDao = new app.infra.ProdutosBanco(connection);

        produtoDao.lista((error,results)=>{
            res.render('promocoes/form',{lista:results});
        });

    connection.end();

    });

    app.post("/promocoes", (req,res) => {
        var promocao = req.body;
        app.get('io').emit("novaPromocao",promocao);

        res.redirect("/promocoes/form");
    });

}