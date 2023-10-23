const Product = require('../models/product');

// Create a new product
async function createProduct(req, res) {
    try {
        const product = await Product.create(req.body);
        res.status(201).json (product);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function getAllProduct(req, res) {
    try {
        const products = await Product.find();
        console.log(products)
        res.json(products);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function updateProduct(req, res) {
    const productId = req.params.id;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteProduct(req, res) {
    const productId = req.params.id; 
    try {
        const deletedProduct = await Product.findByIdAndRemove(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}