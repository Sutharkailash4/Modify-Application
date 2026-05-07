const express = require("express");
const authenticationRoute = express.Router();

const controllers = require(".././controllers/auth.controller");
const authMiddleware = require(".././middleware/auth.middleware");

authenticationRoute.post("/register",controllers.registerController);
authenticationRoute.post("/login",controllers.loginController);
authenticationRoute.get("/getMe",authMiddleware.identifyUser,controllers.getMeController);
authenticationRoute.get("/logout",)

module.exports = authenticationRoute;