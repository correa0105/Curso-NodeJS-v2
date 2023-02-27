const express = require('express')
const path = require('path')
const ejs = require('ejs')

const pool = require('./db/conn')

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

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pagesqty = req.body.pagesqty

    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pagesqty', title, pagesqty]

    pool.query(sql, data, (err) => {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/')
    })
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'

    pool.query(sql, (err, data) => {
        if(err) {
            console.log(err)
            return
        }

        const books = data;

        res.render('books', { books: books })
    })
})

app.get('/books/:id', (req, res) => {

    const id = req.params.id
    
    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0];

        res.render('book', { book: book })
    })
})

app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0];

        res.render('editbook', { book: book })
    })
})

app.post('/books/updatebook', (req, res) => {

    const { id, title, pagesqty } = req.body

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pagesqty', pagesqty, 'id', id]

    pool.query(sql, data, err => {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {

    const id = req.params.id

    const sql = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, err => {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.listen(3000)