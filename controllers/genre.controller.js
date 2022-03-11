const Genre = require("../models/Genre.model")

module.exports.genreController = {
    addGenre: async(req, res) => {
        try {
            await Genre.create({
                name: req.body.name
            })
            res.json("жанр добавлен")
        }catch (err) {
            res.json(err)
        }
    },
    deleteGenreId: async (req, res) => {
        try {
            await Genre.findByIdAndDelete(req.params.id)
            res.json("жанр удален")
        } catch (err) {
            res.json(err)
        }
    },
    changeGenreId: async (req, res) => {
        try {
            await Genre.findByIdAndUpdate(req.params.id, req.body)
            res.json("жанр изменен")
        } catch (err) {
            res.json(err)
        }
    },
    lookGenre: async (req, res) => {
        try {
            const data = await Genre.find()
            res.json(data)
        } catch (err) {
            res.json(err)
        }
    }
}