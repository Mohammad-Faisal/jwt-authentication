require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];

const routes = require('./routes/index.js');

const mongoose = require('mongoose');

//for login
const passport = require('passport');
const authenticate = require('./authenticate');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended :true
}))
app.use(passport.initialize());
app.use(passport.session());


if(environment !== 'production'){
    app.use(logger('dev'));
}

mongoose.connect(process.env.MONGO_LOCAL_CONN_URL);
mongoose.set('useCreateIndex', true);

//for login

app.use('/api/v1' , routes(router));

app.listen(`${stage.port}` , () => {
    console.log(`Server now listening at localhost:${stage.port}`)
});

module.exports = app;