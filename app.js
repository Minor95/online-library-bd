const express = require("express")
const mongoose = require("mongoose")
const hbs = require("express-handlebars")
const path = require("path")
const app = express()


app.use(express.json())
app.use(require("./routes/index.js"))
app.use(express.static(path.resolve(__dirname, "public")))
app.engine(".hbs", hbs({ extname: ".hbs", defaultLayout: "main.hbs" }))
app.set("view engine", ".hbs")

mongoose
    .connect("mongodb+srv://Magomed:intonshable0895@cluster0.vvvw9.mongodb.net/online-library?retryWrites=true&w=majority",
        () => {
            console.log("успешное подключение к MDB")
            app.listen(5000, ()=> console.log("сервер запущен"))
        })