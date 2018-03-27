let express = require('express');
let app = express();

app.get('/produtos', (req,res)=>{
    res.send("<html><body><h1>Listagem de produtos</h1></body></html>");
});

app.listen(3000,()=> console.log("servidor rodando"));