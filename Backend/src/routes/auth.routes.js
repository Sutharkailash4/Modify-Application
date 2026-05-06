const express = require("express");
const authenticationRoute = express.Router();

const controllers = require(".././controllers/auth.controller");

authenticationRoute.post("/register",controllers.registerController);
authenticationRoute.post("/login",controllers.loginController);
authenticationRoute.get("/getMe",controllers.getMeController);

module.exports = authenticationRoute;