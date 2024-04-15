// http://localhost:5050/api/v1/movies
const moviesController =require("../controllers/moviesController")

const moviesRoutes = require("express").Router()

// Add film to DB
moviesRoutes.post("/movies", (req, res, next) => { console.log("JOI"); next()} ,moviesController.add)

// Get all movies
moviesRoutes.get("/movies", moviesController.getAll)

// Get movie by id
moviesRoutes.get("/movies/:id", moviesController.getOne)

// Upd movie
moviesRoutes.put("/movies/:id", moviesController.update)

// Delete movie
moviesRoutes.delete("/movies/:id", moviesController.remove)

module.exports=moviesRoutes