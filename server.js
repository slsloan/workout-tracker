// import dependencies 
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// setup the express app 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// setup express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// starts the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
