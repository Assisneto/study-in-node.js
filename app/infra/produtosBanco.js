module.exports = ()=>{
   return (connection)=>{ 
        this.lista = (callback)=>{
            connection.query('select * from produtos',callback);
        }
        return this;    
    }
}