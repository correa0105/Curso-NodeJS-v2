const express = require('express')
const path = require('path')
const ejs = require('ejs')

const conn = require('./db/conn')
const User = require('./models/User')
const Adress = require('./models/Adress')

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

app.get('/users/create', async (req, res) => {
    res.render('createUser')
})

app.post('/users/create', async (req, res) => {

    const { name, occupation } = req.body
    let { newsletter } = req.body

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    await User.create({name, occupation, newsletter})

    res.redirect('/')
})

app.get('/users/:id', async (req, res) => {

    const id = req.params.id

    const user = await User.findOne({ include: Adress, where: { id: id } })

    res.render('userdetails', { user: user.get({ plain: true }) })
})

app.post('/users/delete/:id', async (req, res) => {

    const id = req.params.id

    await User.destroy({ where: { id: id } })

    res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {

    const id = req.params.id

    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('editUser', { user: user })
})

app.get('/', async (req, res) => {

    const users = await User.findAll({ raw: true })

    res.render('users', { users: users })
})

app.post('/users/updateuser/', async (req, res) => {

    const { id, name, occupation } = req.body
    let { newsletter } = req.body

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, { where: {id: id }})

    res.redirect('/')
})

app.post('/adress/create', async (req, res) => {
    
    const { UserId, street, number, city } = req.body

    const adress = {
        UserId,
        street,
        number,
        city
    }

    await Adress.create(adress)

    res.redirect(`/users/edit/${UserId}`)
})

app.post('/adress/delete', async (req, res) => {

    const UserId = req.body.UserId
    const id = req.body.id

    console.log(UserId)
    console.log(id)

    await Adress.destroy({ where: { id: id }})

    res.redirect(`/users/${UserId}`)
})

conn
    .sync(/*{ force:true } (PARA LIMPAR OS DADOS DA TABELA) */) 
    .then(() => { app.listen(3000) })
    .catch(err => { console.log(err) })