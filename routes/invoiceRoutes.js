const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

// Create a new invoice
router.post('/invoices', invoiceController.createInvoice);

// Retrieve all invoices
router.get('/invoices', invoiceController.getAllInvoice);

// Update a invoice by ID
router.put('/invoices/:id', invoiceController.updateInvoice);

// Delete a invoice by ID
router.delete('/invoices/:id', invoiceController.deleteInvoice);

module.exports = router;
