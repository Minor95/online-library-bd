const Users = require("../models/Users.model")
const Books = require("../models/Books.model")
module.exports.usersController = {
    addUser: async (req, res) => {
        try {
            await Users.create({
                user: req.body.user,
                photo: req.body.photo,
                counter: req.body.counter,
                booksId: req.body.booksId,
                isBlocked: 0
            })
            res.json("пользователь добавлен")
        } catch (err) {
            res.json(err)
        }
    },
    addBookUserId: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id)
            const book = await Books.findById(req.params.book)
            if (book.rent === true) {
                res.json("the book is already rented")
            } else if(user.isBlocked === true) {
                res.json("you are blocked")
            } else if (user.counter > 2) {
                res.json("no more than 3 books can be borrowed")
            } else {
                await Users.findByIdAndUpdate(req.params.id, {
                    counter: user.counter + 1
                })
                await Books.findByIdAndUpdate(req.params.book, {
                    rent: rent = true
                    })
                    await Users.findByIdAndUpdate(req.params.id, {
                        $push: { booksId: req.params.book }            
                    })
                    res.json("book added")    
            }
        } catch (err) {
            res.json(err)
        }
    },
    adminBlockedId: async (req, res) => {
        try {
            const book = await Users.findById(req.params.id,).populate("booksId");
            await Books.findByIdAndUpdate({
                rent: rent = false
                })
            





            // book.booksId.rent = false
            // await Users.findByIdAndUpdate(req.params.id, {
            //     counter: 0,
            //     isBlocked: isBlocked = true,
            //     booksId: [],
            // })
            res.json(book)
        } catch (err) {
            res.json(err)
        }
    }
}
