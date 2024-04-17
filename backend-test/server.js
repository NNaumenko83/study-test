const express = require("express");
require("dotenv").config();
require("colors");
const moviesRouter = require("./moviesRoutes/moviesRouter");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/movies", moviesRouter);
app.use("*", (req, res, next) => {
    res.status(404).json({
        status: 404,
        error: "Not found",
    });
});

app.use((error, req, res, next) => {
    res.status(500).json({
        status: 500,
        error: error.message,
    });
});

mongoose
    .connect(process.env.MONGO_URL)
    .then((DB) => {
        console.log(
            `DB connect on PORT: ${DB.connection.port}, Name: ${DB.connection.name}`
                .green.bold.italic
        );
        app.listen(process.env.PORT, () => {
            console.log(
                `Server is running on PORT ${process.env.PORT}`.green.italic
                    .bold
            );
        });
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
