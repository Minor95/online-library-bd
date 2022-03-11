const Comments = require("../models/Comments.model")

module.exports.commentsController = {
    addComment: async (req, res) => {
        try {
            await Comments.create({
                userId: req.body.userId,
                text: req.body.text,
                books: req.body.books
            })
            res.json("комментарий добавлен")
        } catch (err) {
            res.json(err)
        }
    },
    deleteCommentId: async (req, res) => {
        try {
            await Comments.findByIdAndDelete(req.params.id)
            res.json("комментарий удален")
        } catch (err) {
            res.json(err)
        }
    }
}