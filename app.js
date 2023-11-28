require('./routes/db');
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000;

const sensorComm = require('./routes/sensorComm')

app.use(express.json());

app.use('/', sensorComm)

app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`)
});

