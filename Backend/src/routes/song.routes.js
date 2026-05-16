const express = require("express");
const songRoutes = express.Router();
const upload = require(".././middleware/upload.middleware");
const songControllers = require(".././controllers/song.controller");

songRoutes.post("/upload",upload.single("song"),songControllers.uploadSongController);
songRoutes.get('/upload', songControllers.getSongController);

module.exports = songRoutes;