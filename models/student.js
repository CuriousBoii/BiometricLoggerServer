const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    RollNo: {type:Number, required: true},
    Name:{ type: String ,required :true },
    studentID:{type:String, required: true},
    TelegramContactNo: String,
    date: {type:String, required:true},
    time:String
})

module.exports = student = mongoose.model("student", studentSchema);