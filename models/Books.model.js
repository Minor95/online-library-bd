const mongoose = require("mongoose")

const booksSchema = mongoose.Schema({
    bookName: String,
    text: String,
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre"
    } ,
    rent: Boolean,
    photo: String,
})
const Books = mongoose.model("Books", booksSchema)
module.exports = Books
