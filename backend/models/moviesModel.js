// {
//   title: 'Avatar',
//   genre: 'fantasy',
//   year: '2009',
//   rating: '5'
// }

const { model, Schema } = require("mongoose");
const { required } = require("nodemon/lib/config");

const moviesSchema = new Schema(
    {
        title: { type: String, required: [true, "Title is required"] },
        genre: { type: String, required: [true, "Genre is required"] },
        year: { type: Number, default: 2000 },
        rating: { type: Number, default: 0.0 },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = model("movie", moviesSchema);
