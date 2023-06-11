const mongoose = require("mongoose");

const JobreqSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    organisation: {
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