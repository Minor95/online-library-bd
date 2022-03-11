const { Router } = require("express")
const { genreController } = require("../controllers/genre.controller")
const router = Router()

router.post("/add/genre", genreController.addGenre)
router.delete("/delete/genre/:id", genreController.deleteGenreId)
router.patch("/change/genre/:id", genreController.changeGenreId)
router.get("/look/genre", genreController.lookGenre)

module.exports = router