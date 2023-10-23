const express = require( 'express');
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const invoiceRoutes = require('./routes/invoiceRoutes')
const purchaseHistoryRoutes = require('./routes/purchaseHistoryRoutes')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
require('./utils/db');

const port = 3005;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', invoiceRoutes);
app.use('/api', purchaseHistoryRoutes);

app.get( '/' , (req, res) => {
    res.send( `Hello, World!` ) ;
});

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello to ${name} too!!`);
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});