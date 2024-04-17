const Movie = require("../models/moviesModel");

class MoviesService {
    add = async (movie) => {
        const newMovie = await Movie.create(movie);
        console.log("newMovie:", newMovie);
        if (!newMovie) {
            res.status(400);
            throw new Error("Bad request");
        }
        return newMovie;
    };
}

module.exports = new MoviesService();
