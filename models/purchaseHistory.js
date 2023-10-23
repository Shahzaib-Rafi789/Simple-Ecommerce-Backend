const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    invoices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice', // Reference to the Invoice model
        required: true,
    }],
    
}, { timestamps: true });

module.exports = mongoose.model('PurchaseHistory', purchaseHistorySchema);
