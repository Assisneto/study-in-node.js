let app = require ('./config/express')();
app.get("/produtos", (req, res) => {
    console.log('Listando....')
    res.render('produtos/lista');
});

app.listen(3000, ()=> console.log("Servidor rodando"));