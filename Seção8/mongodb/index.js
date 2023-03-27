const express = require('express')
const path = require('path')
const ejs = require('ejs')
const conn = require('./db/conn')

const app = express()

const productsRoutes = require('./routes/productsRoutes')

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
    express.urlencoded({ extended: true }),
    express.json(),
    express.static('public')
)

app.use('/products', productsRoutes)

app.listen(3000)