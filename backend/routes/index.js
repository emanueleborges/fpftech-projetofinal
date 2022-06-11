const express = require('express');
const produtos = require('./produtosRoute');
const vendas = require('./vendasRoute');
const clientes = require('./clientesRoute');
const cors = require('cors');

// rodar swagger gerar documentacao

//app.use(produtos);
//app.use(vendas);
//app.use(clientes);

module.exports = app => {
  app.use(
    cors(),
    express.json(),
    produtos,
    vendas,
    clientes
  )
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Authorization");
    next();
  }); 
};