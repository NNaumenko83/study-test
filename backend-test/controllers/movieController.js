const AsyncHandler = require("express-async-handler");
const movieService = require("../services/moviesService");

class MovieController {
    add = AsyncHandler(async (req, res) => {
        const movie = req.body;
        const data = await movieService.add(movie);
        res.status(201).json({ code: 201, data });
    });
    getAll = AsyncHandler(async (req, res) => {
        const movies = await movieService.show();
        res.status(201).json({ code: 200, data: movies, qty: movies.length });
    });
    getOne = AsyncHandler(async (req, res) => {
        const { id } = req.params;
        const movie = await movieService.getOne(id);
        res.status(200).json({ code: 200, data: movie });
    });
    update = AsyncHandler(async (req, res) => {
        res.status(201).json({ code: 201, data: "Added" });
    });
    remove = AsyncHandler(async (req, res) => {
        res.status(201).json({ code: 201, data: "Added" });
    });
}

module.exports = new MovieController();
