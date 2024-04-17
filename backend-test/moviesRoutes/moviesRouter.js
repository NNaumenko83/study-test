const express = require("express");
const moviesRouter = express.Router();
const movieController = require("../controllers/movieController");

// get All movies
moviesRouter.post("/", movieController.add);

// get one movie

// update

// delete

// add

module.exports = moviesRouter;
