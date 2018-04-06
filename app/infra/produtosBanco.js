module.exports = ()=>{
   return (connection)=>{ 
        this.lista = (callback)=>{
            connection.query('select * from produtos',callback);
        }
        console.log(this);
        
        return this;    
    }
}