// models/todo.js
const mongoose = require("mongoose");

//Attributes definition for Volunteer
const adminSchema = new mongoose.Schema({
    email: String,
    password: String
}) 
//Table definition for Volunteer
const Admin = new mongoose.model("Admin", adminSchema)
module.exports = Admin;