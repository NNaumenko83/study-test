const Movie = require("../models/moviesModel");

class MoviesService {
    // add movie
    add = async (movie) => {
        const newMovie = await Movie.create(movie);
        console.log("newMovie:", newMovie);
        if (!newMovie) {
            throw new Error("Bad request");
        }
        return newMovie;
    };
    // get all movies
    show = async () => {
        const movies = await Movie.find();
        if (!movies) {
            throw new Error("Unable to find movies");
        }

        return movies;
    };

    // get One movie
    getOne = async (id) => {
        const movie = await Movie.findById(id);
        if (!movie) {
            throw new Error("Unable to find movie");
        }

        return movie;
    };

    // delete

    remove = async (id) => {
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) {
            throw new Error("Unable to find movie");
        }
        return movie;
    };

    // update
    update = async (id, movie) => {
        const updatedMovie = await Movie.findByIdAndUpdate(id, movie, {
            new: true,
        });
        console.log("updatedMovie:", updatedMovie);
        if (!updatedMovie) {
            throw new Error("Unable to find movie");
        }
        return updatedMovie;
    };
}

module.exports = new MoviesService();
