const express = require("express");
const moviesRouter = express.Router();
const movieController = require("../controllers/movieController");
const isValidID = require("../middlewares/isValidId");

// get All movies
moviesRouter.get("/", movieController.getAll);

// get one movie
moviesRouter.get("/:id", isValidID("id"), movieController.getOne);

// update
moviesRouter.put("/:id", isValidID("id"), movieController.update);
// delete
moviesRouter.delete("/:id", isValidID("id"), movieController.remove);

// add
moviesRouter.post("/", movieController.add);

module.exports = moviesRouter;
