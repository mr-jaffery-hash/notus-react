// models/todo.js
const mongoose = require("mongoose");

//Attributes definition for Volunteer
const volunteerSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    name: String,
    address: String,
    institute: String,
    phoneNo: String,
}) 
//Table definition for Volunteer
const Volunteer = new mongoose.model("Volunteer", volunteerSchema)
module.exports = Volunteer;