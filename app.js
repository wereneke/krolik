const express = require('express');
const { getAll, getOne, addOne } = require('./route');

const app = express();
app.use(express.json());

app.route('/')
    .get(getAll)
    .post(addOne);
app.route('/:id')
    .get(getOne);

module.exports = app;