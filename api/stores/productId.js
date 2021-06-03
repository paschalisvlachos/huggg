const fse = require('fs-extra')

module.exports = {
  storesProductIdApi: async (req, res) => {
    const productId = req.params.productId;

    let products = await getProducts(productId);

    // products.forEach(function(i, index, arr) {
    //   console.log(i);
    // })

    res.json({
      products
    });

  }
};

function getProducts(productId){
  return new Promise(function(resolve, reject){

    fse.readFile('brands.json', (err, data) => {
      if (err) throw err;
      let parsedContent = JSON.parse(data);

      const products = parsedContent.data.filter(items => items.products[0] === productId);

      resolve(products[0].stores);

    });

  })
}