const path = require('path')
const express = require('express')
const app = express()

const port = 3000
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('Servidor iniciado http://localhost:' + port)
})
