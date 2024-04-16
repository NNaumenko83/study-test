const AsyncHandler = require("express-async-handler");

class MovieController {
    add = AsyncHandler(async (req, res) => {
        res.status(201).json({ code: 201, data: "Added" });
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
