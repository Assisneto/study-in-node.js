let app = require ('./config/express')();
let http = require ('http').Server(app);
let io = require('socket.io')(http);

app.set('io',io);

http.listen(3000, ()=> console.log("Servidor rodando"));