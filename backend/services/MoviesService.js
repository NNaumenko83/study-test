const moviesModel = require("../models/moviesModel");

class MoviesService {
    show = async () => {
        const movies = await moviesModel.find({});
        if (!movies) {
            res.status(400);
            throw new Error("Unable to find movies");
        }

        return movies;
    };
}

module.exports = new MoviesService();
