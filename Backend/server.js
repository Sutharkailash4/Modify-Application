require("dotenv").config();
const app = require("./src/app");
const Port = 3000;
const database = require("./src/config/database");

database();

app.listen(Port,()=>{
    console.log("Server is Running on Port 3000");
})