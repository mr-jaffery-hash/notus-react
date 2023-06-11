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
        type:"String"
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

});

const Job = mongoose.model("job", JobSchema);

module.exports = Job;