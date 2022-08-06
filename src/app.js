const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + './public'));

const routes = require('./routes');
app.use('/', routes);

module.exports = app;