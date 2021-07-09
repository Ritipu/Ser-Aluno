const express = require('express');
// const {  } = require('./db');

const PORT = 3001;
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Working'
    })
})

server.get('/obtemAnoLetivo', (req, res) => {
    anoLetivo = '5º Ano'
    res.status(200).json(anoLetivo)
})



server.listen(PORT, () => console.log('À escuta em ' + PORT));