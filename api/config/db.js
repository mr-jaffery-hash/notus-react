// config/db.js
const mongoose = require("mongoose");

const db = "mongodb+srv://mrjaffery:VXyEHHudq5iLGvQy@cluster0.g8aer3a.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;