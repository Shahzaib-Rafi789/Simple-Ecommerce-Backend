const express = require('express');
const router = express.Router();
const purchaseHistoryController = require('../controllers/purchaseHistoryController');

// Create a new purchaseHistory
router.post('/purchaseHistory', purchaseHistoryController.createPurchaseHistory);

// Retrieve all purchaseHistorys
router.get('/purchaseHistories', purchaseHistoryController.getAllPurchaseHistory);

// Update a purchaseHistory by ID
router.put('/purchaseHistory/:id', purchaseHistoryController.updatePurchaseHistory);

// Delete a purchaseHistory by ID
router.delete('/purchaseHistory/:id', purchaseHistoryController.deletePurchaseHistory);

module.exports = router;
