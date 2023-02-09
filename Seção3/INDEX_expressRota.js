const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Res é a resposta enviada ao usuário.')
})

app.listen(port, () => {
    console.log('Servidor iniciado http://localhost:' + port)
})