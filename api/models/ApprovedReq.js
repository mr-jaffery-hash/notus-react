const mongoose = require("mongoose");

//Attributes definition for Volunteer
const approvedReqSchema = new mongoose.Schema({
    Userid: String,
    Jobid: String
}) 
//Table definition for Volunteer
const ApprovedReq = new mongoose.model("ApprovedReq", approvedReqSchema)
module.exports = ApprovedReq;