const Movie = require("../models/moviesModel");

class MoviesService {
    // add movie
    add = async (movie) => {
        const newMovie = await Movie.create(movie);
        console.log("newMovie:", newMovie);
        if (!newMovie) {
            res.status(400);
            throw new Error("Bad request");
        }
        return newMovie;
    };
    // get all movies
    show = async () => {
        const movies = await Movie.find();
        if (!movies) {
            res.status(400);
            throw new Error("Unable to find movies");
        }

        return movies;
    };

    // get One movie
    getOne = async (id) => {
        const movie = await Movie.findById(id);
        if (!movie) {
            res.status(400);
            throw new Error("Unable to find movie");
        }

        return movie;
    };
}

module.exports = new MoviesService();
