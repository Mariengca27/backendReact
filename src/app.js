const express = require('express');
const routes = require('./routes');


class App{
constructor(){
     this.app = express(); //global
     this.routes();

}

routes(){
  this.app.use(routes);
}

}
module.exports = new App().app;
