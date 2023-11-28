const express = require('express')
const sensorData = require('../models/sensorData')
const router = express.Router()

router.post('/', (req, res) =>{
    const newData = new sensorData(req.body);
    console.log("user", req.body);
    newData.save()
    .then((data)=>{
        console.log("Saved");
        res.status(201).send(data);
    })
    .catch((err)=>{
        console.error(err);
    });
});

router.get('/', (req, res) =>{
    res.send("got it!")
})

module.exports = router;
