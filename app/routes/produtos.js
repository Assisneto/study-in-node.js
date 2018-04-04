let connection = require('../infra/dbconnection');
module.exports = (app)=>{ app.get("/produtos", (req, res) => {
    console.log('Listando....')
    
         connection.query('select * from produtos',function(err,results){
            if (err){
                console.log(err);
                }
            res.send(results);
        
        });

        connection.end();

    });
}