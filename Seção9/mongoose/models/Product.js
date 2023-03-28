const mongoose = require('mongoose')
const { Schema } = mongoose

const Product = mongoose.model(
    'Product',
    new Schema({
        image: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
        description: { type: String, required: true }
    })
)

module.exports = Product