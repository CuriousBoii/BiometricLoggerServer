const mongoose = require('mongoose')

const sensorDataSchema = new mongoose.Schema({
    deviceID: String,
    studentID: {type:Number, required: true},
    confidence: {type:Number, required: true},
    date: {type:String, required:true},
    time:String
})

module.exports = sensorData = mongoose.model("sensorData", sensorDataSchema)