const mongoose = require("mongoose");

const JobreqSchema = new mongoose.Schema({
    Userid: {
        type: String,
        required: true,
    },
    Jobid: {
        type: String,
        required: true,
    },
    Approved: {
        type: Boolean,
        default: false,
    },


});

const Jobreq = mongoose.model("jobreq", JobreqSchema);

module.exports = Jobreq;