module.exports = ()=>{
  return ProdutosBanco;
}
class ProdutosBanco{
    constructor(connection){
        this.connection = connection;
    }
    lista(callback) {
        return this.connection.query('select * from produtos',callback);
    }
}