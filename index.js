const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ origin: '*' }));


// api routes
app.use('/api/cart', require('./cart/cart.controller'));
app.use('/api/product', require('./product/product.controller'));
app.use('/api/brand', require('./brand/brand.controller'));
app.use('/api/category', require('./category/category.controller'));
app.use('/api/review', require('./review/review.controller'));
app.use('/api/user', require('./user/user.controller'));
app.use('/api/files', require('./files/files.controller'));


//start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on port ' + port));
