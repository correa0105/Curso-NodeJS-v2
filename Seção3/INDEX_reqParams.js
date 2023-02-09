const path = require('path')
const express = require('express')
const app = express()

const port = 3000
const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    console.log('Estamos buscando pelo usuario: ' + id)

    res.sendFile(`${basePath}/index.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('Servidor iniciado http://localhost:' + port)
})
