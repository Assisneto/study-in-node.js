module.exports = (app)=>{ app.get("/produtos", (req, res) => {
    console.log('Listando....')
    res.render('produtos/lista');
    });
}