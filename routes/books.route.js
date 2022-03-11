const { Router } = require("express")
const { booksController } = require("../controllers/books.controller")
const router = Router()

router.get("/all/books/admin", booksController.allBooksAdmin)
router.get("/all/books", booksController.allBooks)
router.get("/users/get", booksController.userGet)
router.get("/user/profile/:id", booksController.userProfile)
router.get("/all/book/:id", booksController.allBookId)
router.get("/all/genre/:id", booksController.allGenreId)
router.post("/add/book", booksController.addBook)
router.delete("/delete/book/:id", booksController.deleteBookId)
router.patch("/change/book/:id", booksController.changeBookId)
router.get("/look/book", booksController.lookBook)
router.get("/oneLookBook/:id", booksController.oneLookBookId)
router.get("/genre/book/:id", booksController.genreBookId)

module.exports = router