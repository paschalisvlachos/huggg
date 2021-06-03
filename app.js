const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const { mainApi } = require('./api/main');
const { brandsBrandIdApi } = require('./api/brands/brandId');
const { productsBrandIdApi } = require('./api/products/brandId');
const { storesBrandIdApi } = require('./api/stores/brandId');
const { storesProductIdApi } = require('./api/stores/productId');

app.use(bodyParser.json());

const port = 80;

// routes for the api
app.get('/api', mainApi); // main Api page
app.get('/api/brands/:brandId', brandsBrandIdApi); // Get brand by brand-id
app.get('/api/products/:brandId', productsBrandIdApi); // Get products by brand-id
app.get('/api/stores/:brandId', storesBrandIdApi); // Get stores by brand-id
app.get('/api/storesProducts/:productId', storesProductIdApi); // Get stores by product-id

module.exports = app;

// set the app to listen on the port
// if it runs via localhost it will use http while online it will use https
if (require.main === module) {
    app.listen(process.env.PORT || port, () => {
        console.log("Express server listening on port %d in %s mode", port, app.settings.env);
    });
}
