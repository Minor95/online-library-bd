const { Router } = require("express")
const { commentsController } = require("../controllers/comments.controller")
const router = Router()

router.post("/add/comment", commentsController.addComment)
router.delete("/delete/comment/:id", commentsController.deleteCommentId)

module.exports = router