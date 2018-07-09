// requerir config
require('../config/config');

// require express
const express = require('express');

// require bodyParse
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// rutas
app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    res.json({
        persona: body
    });
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el Puerto: ', process.env.PORT);
});