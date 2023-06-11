// server.js
require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");

const app = express();
const cors = require("cors")
app.use(cors());
// routes
const admin = require("./routes/admin"); // added
const ngo = require("./routes/ngo");
const job=require("./routes/job");
const req=require("./routes/req");
const jobreq=require("./routes/jobreq");
// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/admin", admin); // added
app.use("/api/ngo", ngo);
app.use("/api/job",job);
app.use("/api/req",req);
app.use("/api/jobreq",jobreq);
// setting up port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});