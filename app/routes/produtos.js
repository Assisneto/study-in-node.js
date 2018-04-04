let connection = require('../infra/connectionFactory');
module.exports = (app)=>{ app.get("/produtos", (req, res) => {
    console.log('Listando....')
    
         connection.query('select * from produtos',(err,results)=>{
            if (err){
                console.log(err);
                }
            res.render('produtos/lista',{listas:results});
        
        });

        connection.end();

    });
}