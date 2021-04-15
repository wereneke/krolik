const express = require('express');
const {getAll, getOne, addOne} = require('./route');

const app = express();
app.use(express.json());

app.get('/', getAll);
app.get('/:id', getOne);
app.post('/', addOne);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
})