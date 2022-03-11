const { Router } = require("express")
const router = Router()

router.use("/", require("./users.route.js"))
router.use("/", require("./genre.route.js"))
router.use("/", require("./books.route"))
router.use("/", require("./comments.route"))

module.exports = router