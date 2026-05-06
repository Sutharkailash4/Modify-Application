const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth.routes");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth",authRoute);

module.exports = app;