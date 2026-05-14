const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth.routes");
const songRoute = require("./routes/song.routes");

app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
        origin : "http://localhost:5173",
        credentials : true
    }
));

app.use("/api/auth",authRoute);
app.use("/api/song",songRoute);

module.exports = app;