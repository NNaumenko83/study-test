const path = require("path")
const express = require("express")
require("colors")
const configPath=path.join(__dirname,"..","config",".env")
require("dotenv").config({ path: configPath })
const connectDB = require("../config/connectDB")


const app = express()

app.use(express.urlencoded({ extended:false }))
app.use(express.json())


app.use("/api/v1", require("./routes/moviesRoutes"))

connectDB()

app.listen(process.env.PORT, () => { console.log(`Server is running  on port ${process.env.PORT}`.green.italic.bold) })








