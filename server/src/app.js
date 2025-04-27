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

//çözülecekler (//a username b passwordlü 1 kullanıcı var)

////çözdüm //navbardaki login butonu login sayfasına gitmiyor
////çözdüm //tarayıcıda 5173/login diyip login sayfasına gidince a ve b yazınca hiçbir şey olmuyor

//login sayfasında navbar harici bir register butonu konulacak login butonunun yanına
//register sayfasında navbar harici bir login butonu konulacak register butonunun yanına
//stil düzenlemesi
