const express = require("express");
const moviesRouter = express.Router();
const movieController = require("../controllers/movieController");

// get All movies
moviesRouter.get("/", movieController.add);

// get one movie

// update

// delete

// add

module.exports = moviesRouter;
