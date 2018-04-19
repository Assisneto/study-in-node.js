let express = require('../config/express')();
let request = require("supertest")(express);

describe('#ProdutosController', ()=> {
    it('#listagem de produtos json', (done)=> {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,done);

    });
});

describe('#ProdutosController', ()=>{
    it('Listagem de produtos html', (done)=>{
        request.get('/produtos')
        .expect('Content-Type',/html/)
        .expect(200,done);
    });
});