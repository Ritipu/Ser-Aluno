const express = require('express');
// const {  } = require('./db');

const PORT = 3001;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Working'
    })
})


app.listen(PORT, () => console.log('À escuta em ' + PORT));