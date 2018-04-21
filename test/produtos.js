let express = require('../config/express')();
let request = require("supertest")(express);

describe('#ProdutosController', ()=> {
    it('Listagem de produtos html', (done)=>{
        request.get('/produtos')
        .expect('Content-Type',/html/)
        .expect(200,done);
    });
    it('#listagem de produtos json', (done)=> {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,done);
        });
    it('#Cadastro de produto valido',(done)=>{
        request.post('/produtos')
        .send({titulo:"nodepy", descricao:"node com python",preco:20.10})
        .expect(302,done);
    });      
    it('#Cadastro de produto invalido', (done)=>{
        request.post('/produtos')
            .send({titulo:"", descricao:"dasds"})
            .expect(400,done);
        });
});

