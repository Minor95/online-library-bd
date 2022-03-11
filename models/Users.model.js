const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    user: String,
    photo: String,
    counter: Number,
    booksId: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books"
        }
    ],
    isBlocked: Boolean
    
})

const Users = mongoose.model("User", usersSchema)
module.exports = Users