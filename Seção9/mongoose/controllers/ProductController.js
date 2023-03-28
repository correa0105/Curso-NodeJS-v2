const Product = require('../models/Product')

module.exports = class ProductController {

    static async showProducts(req, res) {
        const products = await Product.find().lean()

        res.render('products', { products })
    }

    static createProduct(req, res) {
        res.render('createProducts')
    }

    static async createProductPost(req, res) {
        const { image, name, price, description } = req.body

        const product = new Product({image, name, price, description});

        await product.save()

        res.redirect('/products')
    }

    static async showProduct(req, res) {
        const id = req.params.id
        
        const product = await Product.findById(id).lean()

        res.render('product', { product })
    }

    static async editProduct(req, res) {
        const id = req.params.id
        
        const product = await Product.findById(id).lean()

        res.render('productEdit', { product })
    }

    static async editProductPost(req, res) {
        const { id, image, name, price, description } = req.body
        
        const product = { image, name, price, description }

        await Product.updateOne({ _id: id }, product)

        res.redirect('/products')
    } 
    
    static async removeProduct(req, res) {
        const id = req.params.id
        
        await Product.deleteOne({ _id: id})

        res.redirect('/products')
    }

}