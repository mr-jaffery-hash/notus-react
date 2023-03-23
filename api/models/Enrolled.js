// models/todo.js
const mongoose = require("mongoose");

const EnrolledSchema = new mongoose.Schema({
    email:String,
    rollNo:String,
    jobDesc: String,
    desc:String
}) 
//Table definition for Volunteer
const Enrolled = new mongoose.model("Enrolled", EnrolledSchema)
module.exports = Enrolled;