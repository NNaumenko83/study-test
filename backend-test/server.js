const express = require("express");
require("dotenv").config();
require("colors");
const moviesRouter = require("./moviesRoutes/moviesRouter");

const app = express();

app.use((req, res, next) => {
    console.log("First middleware");
    next();
});
app.use("/api/v1/movies", moviesRouter);

app.listen(process.env.PORT, () => {
    console.log(
        `Server is running on PORT ${process.env.PORT}`.green.italic.bold
    );
});
