// server.js
require("dotenv").config();

const express = require("express");
const app = express();
// app.js
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('./models/Admin');

// ...existing code

// Route for password reset


// ...existing code




const connectDB = require("./config/db");


const cors = require("cors")
app.use(cors());
// routes
const admin = require("./routes/admin"); // added
const ngo = require("./routes/ngo");
const job=require("./routes/job");
const req=require("./routes/req");
const jobreq=require("./routes/jobreq");
const approveReq = require("./routes/approvereq")
const resetpass = require("./routes/resetpass")
const newPass = require("./routes/newPass")
// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/reset",resetpass)
app.use("/api/admin", admin); // added
app.use("/api/ngo", ngo);
app.use("/api/job",job);
app.use("/api/req",req);
app.use("/api/jobreq",jobreq);
app.use("/api/approvereq",approveReq)
app.use("/api/newpass",newPass)
// setting up port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});