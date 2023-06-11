// config/db.js
const mongoose = require("mongoose");

const db = "mongodb+srv://ali:123@cluster0.s4azzji.mongodb.net/?retryWrites=true&w=majority";

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