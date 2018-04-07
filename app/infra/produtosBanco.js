module.exports = ()=>{
  return produtosBanco;
}
class produtosBanco{
    constructor(connection){
        this.connection = connection;
    }
    lista(callback) {
        return this.connection.query('select * from produtos',callback);
    }
}