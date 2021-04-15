const express = require('express');
const { getAll, getOne, addOne } = require('./route');

const app = express();
app.use(express.json());

app.route('/')
    .get(getAll)
    .post(addOne);
app.route('/:id')
    .get(getOne);

const port = 3000;
app.listen(port, () => {
    console.log(`Krolik running on port ${port}`);
})