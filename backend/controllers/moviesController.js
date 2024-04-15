const MoviesModel = require("../models/moviesModel.js");
const asyncHandler = require("express-async-handler");
const { isValidObjectId } = require("mongoose");
const moviesService = require("../services/MoviesService");

class MoviesController {
    // add = (req, res) => {
    //     const { title, genre } = req.body;
    //     if (!title || !genre) {
    //         res.status(400).json({
    //             code: 400,
    //             message: "Please provide all required fields"
    //         });

    //     }
    // res.send(req.body)
    // }

    add = asyncHandler(async (req, res) => {
        const { title, genre } = req.body;
        if (!title || !genre) {
            // res.status(400).json({
            //     code: 400,
            //     message: "Please provide all required fields",
            // });
            res.status(400);
            throw new Error("Please provide all required fields");
        }

        const movie = await MoviesModel.create({ ...req.body });
        if (!movie) {
            res.status(400);
            throw new Error("Unable to save in Database");
        }
        res.status(201).json({ code: 201, data: movie });
    });

    getOne = asyncHandler(async (req, res) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400);
            throw new Error("Invalid Id");
        }

        const movie = await MoviesModel.findById(id);
        if (!movie) {
            res.status(400);
            throw new Error("Unable to find movie");
        }
        res.status(200).json({ code: 200, data: movie });
    });

    // getAll = asyncHandler(async (req, res) => {
    //     const movies = await MoviesModel.find({});
    //     if (!movies) {
    //         res.status(400);
    //         throw new Error("Unable to find movies");
    //     }
    //     res.status(200).json({ code: 200, data: movies, qty: movies.length });
    // });

    getAll = asyncHandler(async (req, res) => {
        const movies = await moviesService.show();

        res.status(200).json({ code: 200, data: movies, qty: movies.length });
    });

    update = asyncHandler(async (req, res) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400);
            throw new Error("Invalid Id");
        }

        const movie = await MoviesModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!movie) {
            res.status(400);
            throw new Error("Unable to find movie");
        }
        res.status(200).json({ code: 200, data: movie });
    });

    remove = asyncHandler(async (req, res) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400);
            throw new Error("Invalid Id");
        }

        const movie = await MoviesModel.findByIdAndDelete(id);
        if (!movie) {
            res.status(400);
            throw new Error("Unable to find movie");
        }
        res.status(200).json({ code: 200, data: movie });
    });
}

module.exports = new MoviesController();
