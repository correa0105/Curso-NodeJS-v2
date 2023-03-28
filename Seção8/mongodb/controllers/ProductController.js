const Product = require('../models/Product')

module.exports = class ProductController {

    static async showProducts(req, res) {
        const products = await Product.getProducts()

        res.render('products', { products })
    }

    static createProduct(req, res) {
        res.render('createProducts')
    }

    static createProductPost(req, res) {
        const { image, name, price, description } = req.body

        const product = new Product(image, name, price, description);

        product.save()

        res.redirect('/products')
    }

    static async showProduct(req, res) {
        const id = req.params.id
        
        const product = await Product.getProductById(id)

        res.render('product', { product })
    }

    static async removeProduct(req, res) {
        const id = req.params.id
        
        Product.removeProductById(id)

        res.redirect('/products')
    }

    static async editProduct(req, res) {
        const id = req.params.id
        
        const product = await Product.getProductById(id)

        res.render('productEdit', { product })
    }

    static async editProductPost(req, res) {
        const { id, image, name, price, description } = req.body
        
        const product = await new Product(image, name, price, description)

        await product.updateProduct(id)

        res.redirect('/products')
    }

}