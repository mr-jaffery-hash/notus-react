const mongoose = require("mongoose");

const RatingsSchema = new mongoose.Schema({
    userID: {
        type: "String",
        required: true,
    },
    jobID: {
        type: "String"
    },
    rating :{
        type: "Integer"
    },
});

const Ratings = mongoose.model("ratings", RatingsSchema);

module.exports = Ratings;