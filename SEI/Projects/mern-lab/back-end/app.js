const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();
// require('./db-utils/connect');
require('./middleware/logger');

const mongoose = require('mongoose');
//...farther down the page
mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});


// app.use(connect);
app.use(require('./middleware/logger'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


const animalController = require('./controllers/animalController');
app.use('/', animalController);









app.listen(3001, () => {
    console.log('Port 3001 running')
})