const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const routes = require("./routes");
const logger = require("morgan");
const app = express();

// app.get("/api", (req, res) => {
//     const api = [
//         { id: 1, firstName: "Zach", lastName: "Dunn"},
//     ]
// });


// app.listen(port, () => console.log(`Server started on port ${port}`));

// static assets
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

// -------------------------------------------
// parse request body as json
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// -------------------------------------------
// mongodb connection
// var DB_Connect = process.env.MONGODB_URI || "mongodb://localhost/booksApp";
    mongoose.connect(DB_Connect, {usedNewUrlParser: true }, function (err){
        if (err){
            console.log(err);
        }
        else {
            console.log("connected to database");
        };
    });

