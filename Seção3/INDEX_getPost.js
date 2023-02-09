const path = require('path')
const express = require('express')
const app = express()
const userRoutes = require('./users')

const port = 3000
const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true
    }),
    express.json()
)

app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('Servidor iniciado http://localhost:' + port)
})
