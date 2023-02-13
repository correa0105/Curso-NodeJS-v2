const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ["Item a", "Item b", "Item c", "Item d"]

    res.render('dashboard', { items })
})

app.get('/blogpost', (req, res) => {

    const post = {
        title: 'Aprendendo NodeJS',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender NodeJS',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {

    const posts = [{
        title: 'Aprendendo NodeJS',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender NodeJS',
        comments: 4
    },
    {
        title: 'Aprendendo JavaScript',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender JavaScript',
        comments: 5
    },
    {
        title: 'Aprendendo Python',
        category: 'Python',
        body: 'Este artigo vai te ajudar a aprender Python',
        comments: 1
    },
    {
        title: 'Aprendendo EJS',
        category: 'EJS',
        body: 'Este artigo vai te ajudar a aprender EJS',
        comments: 3
    }
    ]

    res.render('blog', { posts })
})

app.get('/', (req, res) => {

    const user = {
        name: 'Lucas',
        lastname: 'Corrêa',
        age: 23
    }

    const auth = true

    res.render('home', { user, auth })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})