const Invoice = require('../models/invoice');

// Create a new Invoice
async function createInvoice(req, res) {
    try {
        const invoice = await Invoice.create(req.body);
        res.status(201).json (invoice);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function getAllInvoice(req, res) {
    try {
        const Invoices = await Invoice.find();
        console.log(Invoices)
        res.json(Invoices);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function updateInvoice(req, res) {
    const InvoiceId = req.params.id;
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(InvoiceId, req.body, { new: true });
        if (!updatedInvoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.json(updatedInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteInvoice(req, res) {
    const InvoiceId = req.params.id; 
    try {
        const deletedInvoice = await Invoice.findByIdAndRemove(InvoiceId);
        if (!deletedInvoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.json({ message: 'Invoice deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createInvoice,
    getAllInvoice,
    updateInvoice,
    deleteInvoice,
}