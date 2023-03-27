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

}