const mongoose = require("mongoose");

const ReqSchema = new mongoose.Schema({
    Userid: {
        type: String,
        required: true,
    },
    Jobid: {
        type: String,
        required: true,
    },
    Verified: {
        type: Boolean,
        default: false,
    },


});

const Req = mongoose.model("req", ReqSchema);

module.exports = Req;