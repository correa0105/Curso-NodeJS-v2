const express = require('express')
const app = express()

app.use(
    express.urlencoded({extended: true}),
    express.json()
)

/* ROTAS - ENDPOINTS */

app.post('/createProduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if(!name) {
        res.status(422).json({message: `O campo name é obrigatório.`})
        return
    }

    res.status(201).json({message: `O produto ${name}, foi cadastrado no valor de ${price}`})
})

app.get('/', (req, res) => {
    res.status(200).json({message: 'Primeira rota, criada com sucesso!'})
})

app.listen(3000)