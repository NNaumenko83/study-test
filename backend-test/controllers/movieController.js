const AsyncHandler = require("express-async-handler");
const movieService = require("../services/moviesService");

class MovieController {
    add = AsyncHandler(async (req, res) => {
        const movie = req.body;
        const data = await movieService.add(movie);
        res.status(201).json({ code: 201, data });
    });
    getAll = AsyncHandler(async (req, res) => {
        res.status(201).json({ code: 201, data: "Added" });
    });
    getOne = AsyncHandler(async (req, res) => {
        res.status(201).json({ code: 201, data: "Added" });
    });
    update = AsyncHandler(async (req, res) => {
        res.status(201).json({ code: 201, data: "Added" });
    });
    remove = AsyncHandler(async (req, res) => {
        res.status(201).json({ code: 201, data: "Added" });
    });
}

module.exports = new MovieController();
