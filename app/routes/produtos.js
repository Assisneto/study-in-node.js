module.exports = (app)=>{ app.get("/produtos", (req, res) => {
    let connection = app.infra.connectionFactory();
    let ProdutosBanco = new app.infra.ProdutosBanco(connection);
    console.log('Listando....')
    
   
    ProdutosBanco.lista((err,results)=>{
        if (err){
            console.log(err);
        }
        res.format({
            html : ()=>{
                res.render('produtos/lista',{listas:results});
            },
            json : () =>{
                res.json(results)
                }
        });
    });   

    app.get("/produtos/form",(req, res) => {
        res.render('produtos/form');
    });

    app.post("/produtos",(req, res)=>{
        
        let produtos = req.body;
      
        let validadorTitulo = req.assert('titulo', 'Titulo deve ser preenchido');
        validadorTitulo.notEmpty();

        let err = req.validationErrors();
        if(err){
            res.render('produtos/form');
            return;
        }

        console.log(produtos);
        
        ProdutosBanco.salvar(produtos,(err,results)=>{
            if (err){
                console.log(err);
                }
            res.redirect('/produtos');
            });
        });
        app.get("/produtos/del",(req, res)=>{
            res.render('produtos/del');
        });
        app.post("/produtos/del",(req,res)=>{
            let produto = req.body;
            console.log(produto);
            ProdutosBanco.delete(produto,(err,results)=>{
                if (err){
                    console.log(err);
                }
                res.redirect('/produtos');
            });
        });
       // connection.end();
    }); 
}