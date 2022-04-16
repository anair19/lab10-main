const mongoose = require("mongoose"),
    bookSchema = mongoose.Schema({
        name: String,
        author: String,
        link: String,
        book: String,
    });
module.exports = mongoose.model("book", bookSchema)