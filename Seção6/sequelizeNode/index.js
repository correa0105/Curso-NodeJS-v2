const express = require('express')
const path = require('path')
const ejs = require('ejs')
const conn = require('./db/conn')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000)