const express = require('express');
const Controller = require('./controllers/Controller');
const routes = new express.Router();

routes.post('/register', Controller.register);
routes.get('/', (req, res) => {
    res.send('itimalia');
});
module.exports = routes;