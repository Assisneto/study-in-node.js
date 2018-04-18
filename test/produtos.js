let express = require('../config/express')();
let request = require("supertest")(express);

describe('#ProdutosController', function() {
    it('#listagem de produtos json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)

    });
});