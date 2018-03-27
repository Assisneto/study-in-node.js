let express = require('express');
let app = express();

app.set('view engine','ejs');

app.get("/produtos", (req, res) => {
    res.render('produtos/lista');
});

app.listen(3000, ()=>{
    console.log("Servidor rodando");
});