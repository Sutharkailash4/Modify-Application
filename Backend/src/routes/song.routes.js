const express = require("express");
const songRoutes = express.Router();
const upload = require(".././middleware/upload.middleware");
const songControllers = require(".././controllers/song.controller");

songRoutes.post("/upload",upload.single("song"),songControllers.uploadSongController);

module.exports = songRoutes;