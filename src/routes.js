const { Router } = require('express');

const routes = new Router();

//Listar rotas
routes.get('/',(req,res) => {
res.send("Cesar");

});

routes.get('/seg',(req,res) => {
    res.send("TesteSegundaRota");
    
    });



module.exports= routes;