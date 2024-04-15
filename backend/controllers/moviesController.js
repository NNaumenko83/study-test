const MoviesModel = require("../models/moviesModel.js");

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

    add = async (req, res) => {
        const { title, genre } = req.body;
        if (!title || !genre) {
            res.status(400).json({
                code: 400,
                message: "Please provide all required fields",
            });
        }

        const movie = await MoviesModel.create({ ...req.body });
        res.status(201).json({ code: 201, data: movie });
    };

    getOne = (req, res) => {
        console.log("getOne");
    };

    getAll = (req, res) => {
        console.log("getAll");
    };

    update = (req, res) => {
        console.log("update");
    };

    remove = (req, res) => {
        console.log("remove");
    };
}

module.exports = new MoviesController();
