// server.js
require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");

const app = express();
const cors = require("cors")
app.use(cors());
// routes
const admin = require("./routes/admin"); // added
// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/admin", admin); // added
// setting up port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});