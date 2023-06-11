const mongoose = require("mongoose");

const NGOSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    password: {
        type: "String"
    },
    address :{
        type: "String"
    },
    Contact: {
        type:"String"
    }

});

const NGO = mongoose.model("ngo", NGOSchema);

module.exports = NGO;