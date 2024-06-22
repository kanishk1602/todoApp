const express = require("express");
const app = express();

//load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;


//middleware to parse json req body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API Routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log('Server started successfully at ${PORT}');
})

//connect to the database
const dbConnect = require("./congif/database");
dbConnect();

//defauly Route
app.get("/", (req,res) => {
    res.send('<h1> This is HOMEPAGE</h1>');
})