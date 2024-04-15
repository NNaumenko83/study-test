const path = require("path");
const express = require("express");
require("colors");
const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });
const connectDB = require("../config/connectDB");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", require("./routes/moviesRoutes"));

app.use("*", (req, res, next) => {
    res.status(404).json({ code: 404, message: "Unable to request" });
    next();
});

app.use((err, req, res, next) => {
    const statusCode = res.statusCode;
    res.json({ code: statusCode, stack: err.stack });
});

connectDB();

app.listen(process.env.PORT, () => {
    console.log(
        `Server is running  on port ${process.env.PORT}`.green.italic.bold
    );
});
