const PurchaseHistory = require('../models/purchaseHistory');

// Create a new PurchaseHistory
async function createPurchaseHistory(req, res) {
    try {
        const purchaseHistory = await PurchaseHistory.create(req.body);
        res.status(201).json (purchaseHistory);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function getAllPurchaseHistory(req, res) {
    try {
        const PurchaseHistories = await PurchaseHistory.find();
        res.json(PurchaseHistories);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function updatePurchaseHistory(req, res) {
    const PurchaseHistoryId = req.params.id;
    try {
        const updatedPurchaseHistory = await PurchaseHistory.findByIdAndUpdate(PurchaseHistoryId, req.body, { new: true });
        if (!updatedPurchaseHistory) {
            return res.status(404).json({ message: 'Purchase History not found' });
        }
        res.json(updatedPurchaseHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deletePurchaseHistory(req, res) {
    const PurchaseHistoryId = req.params.id; 
    try {
        const deletedPurchaseHistory = await PurchaseHistory.findByIdAndRemove(PurchaseHistoryId);
        if (!deletedPurchaseHistory) {
            return res.status(404).json({ message: 'Purchase History not found' });
        }
        res.json({ message: 'Purchase History deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createPurchaseHistory,
    getAllPurchaseHistory,
    updatePurchaseHistory,
    deletePurchaseHistory
}