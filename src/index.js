const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');



mongoose.connect('mongodb+srv://carolsc:LI1LgT6gWFKitjzz@cluster0.vsnxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
//Middleware - app.use
app.use(cors());
app.use(express.json()); //parse do JSON
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('Listening at http://127.0.0.1:5000'); //rodando na porta 5000
});