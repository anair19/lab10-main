require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;

const book = require("/home/abhi/lab10-main/serve_html/models/book")
const bookController = require("/home/abhi/lab10-main/serve_html/controllers/controller")

const express = require("express"),
    app = express();


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false,}));
 
app.use(express.json())
mongoose.connect(uri,{ useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {console.log("Connection to the database is Successful")});

app.get(
    "/home", 
    bookController.getAllBooks,
    (req, res, next) => {
    console.log(req.data);
    res.render("books", {books: req.data});
    }
);

app.get("/books/:number", bookController.getSingleBooks,
(req, res, next) => {
    console.log(req.data);
    res.render("listing",{books: req.data});
}
);

app.listen(app.get("port"), () => {
    console.log("Server is now running on port 3000")
})

