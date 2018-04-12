module.exports = (app)=>{
    let connection = app.infra.connectionFactory();
    let ProdutosBanco = new app.infra.ProdutosBanco(connection);
    console.log('Listando....')
    
    app.get("/produtos", (req, res) => {
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
    });   

    app.get("/produtos/form",(req, res) => {
        res.render('produtos/form',{validadorErros:[], produtos:[]});
    });

    app.post("/produtos",(req, res)=>{
        
        let produtos = req.body;
      
        req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
        req.assert('preco',"Digite um preço validao").isFloat();
        req.assert('descricao', 'Digite uma descrição').notEmpty(); 
        let err = req.validationErrors();
        console.log(`erro:${err}`)
        if(err){
            res.format({
                html : ()=>{
                    res.status(400).render('produtos/form',{validadorErros : err, produtos:produtos});                },
                json : () =>{
                    res.status(400).json(err)
                    }
            });
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
    }