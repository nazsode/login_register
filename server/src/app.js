const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
var bodyParser = require("body-parser");

const app = express();
//connectDB();

//require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);

module.exports = app;

//TO-DOs
// A register button or link to Login page
// A login button or link to Register page
//Change style
