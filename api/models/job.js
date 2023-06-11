const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    duration: {
        type: "String"
    },
    volunteers :{
        type: "String"
    },
    category: {
        type:Number
    },
    address: {
        type:"String"
    },
    city: {
        type:"String"
    },
    country: {
        type:"String"
    },
    postalcode: {
        type:"String"
    },
    details: {
        type:"String"
    },
    organisation: {
        type:"String"
    },
    vacancy: {
        type:"String"
    },

});

const Job = mongoose.model("job", JobSchema);

module.exports = Job;