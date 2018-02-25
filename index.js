const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send({hi: 'elo'});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT);