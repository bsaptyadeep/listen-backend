require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db_connection");
const audioRoute = require("./routes/audioRoute");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/audio", audioRoute);



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
