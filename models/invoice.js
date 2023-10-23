const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: Number,
    price: {
        type: Number,
        validate: {
            validator: function(value) {
                return value >= 0
            },
            message: 'Product Price must be greater than zero.'
        }
    },
});

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    products: [productSchema],
    totalAmount: Number,
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
