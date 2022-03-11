const { Router } = require("express")
const { usersController } = require("../controllers/users.controller")
const router = Router()

router.post("/add/user", usersController.addUser)
router.patch("/add/book/user/:id/:book", usersController.addBookUserId)
router.patch("/blocked/user/:id", usersController.adminBlockedId)


module.exports = router