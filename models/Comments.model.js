const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    books: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books"
    },
    text: String
})
const Comments = mongoose.model("Comments", commentSchema)
module.exports = Comments