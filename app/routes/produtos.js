module.exports = (app)=>{ app.get("/produtos", (req, res) => {
    let connection = app.infra.connectionFactory();
    let ProdutosBanco = new app.infra.ProdutosBanco(connection);
    console.log('Listando....')
    
    
    ProdutosBanco.lista((err,results)=>{
        if (err){
            console.log(err);
        }
        res.render('produtos/lista',{listas:results});
    });   

    app.get("/produtos/form",(req, res) => {
        res.render('produtos/form');
    });

    app.post("/produtos",(req, res)=>{
        let produtos = req.body;
        
        console.log(produtos);
        
        ProdutosBanco.salvar(produtos,(err,results)=>{
            if (err){
                console.log(err);
                }
            res.redirect('/produtos');
            });
            connection.end();
        });
    }); 
}