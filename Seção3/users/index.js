const express = require('express')
const path = require('path')
const router = express.Router()
const basePath = path.join(__dirname, '..' ,'templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) => {
    const name = req.body.name
    const age = req.body.age

    res.send(`O nome do usuário é ${name} e ele tem ${age} anos.`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    console.log('Estamos buscando pelo usuario: ' + id)

    res.sendFile(`${basePath}/index.html`)
})

module.exports = router