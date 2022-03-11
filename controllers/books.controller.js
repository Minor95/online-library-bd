const Books = require("../models/Books.model")
const Users = require("../models/Users.model")
const Comments = require("../models/Comments.model")
const Genre = require("../models/Genre.model")
module.exports.booksController = {
    userProfile: async(req, res) => {
        try {
            const user = await Users.findById(req.params.id)
            res.render("user-prof", {
                user
            })
        } catch (err) {
            res.json(err)
        }
    },
    userGet: async (req, res) => {
        try {
            const users = await Users.find().lean()
            res.render("users", {
                users
            })
        } catch (err) {
            res.json(err)
        }
    },
    allBooksAdmin: async (req, res) => {
        try {
            const books = await Books.find().lean()
            const users = await Users.find().lean()
            const genre = await Genre.find().lean()
            res.render("all-book-admin", {
                books,
                genre,
                users
            })
        } catch (err) {
            res.json(err)
        }
    } ,
    allGenreId: async (req, res) => {
        try {
            const books = await Books.find({ genre: req.params.id }).lean()
            const genre = await Genre.find().lean()
            res.render("all-book", {
                books,
                genre
            })
        } catch (err) {
            res.json(err)
        }
    } ,
    allBookId: async (req, res) => {
        try {
            const books = await Books.findById(req.params.id)
            const comments = await Comments.find({ books: req.params.id }).lean()
            const genre = await Genre.find().lean()
            res.render("one-book", {
                books,
                genre,
                comments
            })
        } catch (err) {
            res.json(err)
        }
    },
    allBooks: async (req, res) => {
        try {
            const books = await Books.find().lean()
            const genre = await Genre.find().lean()
            res.render("all-book", {
                books,
                genre
            })
        } catch (err) {
            res.json(err)
        }
    },
    addBook: async (req, res) => {
        try {
            await Books.create({
                bookName: req.body.bookName,
                text: req.body.text,
                genre: req.body.genre,
                rent: 0,
                photo: req.body.photo
            })
            res.json("книга добавлена")
        } catch (err) {
            res.json(err)
        }
    },
    deleteBookId: async (req, res) => {
        try {
            await Books.findByIdAndDelete(req.params.id)
            res.json("книга удалена")
        } catch (err) {
            res.json(err)
        }
    },
    changeBookId: async (req, res) => {
        try {
            await Books.findByIdAndUpdate(req.params.id, req.body)
            res.json("книга изменена")
        } catch (err) {
            res.json(err)
        }
    },
    lookBook: async (req, res) => {
        try {
            const data = await Books.find()
            res.json(data)
        } catch (err) {
            res.json(err)
        }
    },
    oneLookBookId: async (req, res) => {
        try {
            const data = await Books.findById(req.params.id)
            res.json(data)
        } catch (err) {
            res.json(err)
        }
    },
    genreBookId: async (req, res) => {
        try {
            const data = Books.find({genre: req.params.id})  
        } catch (err) {
            res.json(err)
        }
    },
    
}