const fse = require('fs-extra');

module.exports = {
  storesBrandIdApi: (req, res) => {
    const brandId = req.params.brandId;

    fse.readFile('brands.json', (err, data) => {
      if (err) throw err;
      let parsedContent = JSON.parse(data);

      const stores = parsedContent.embedded.stores.filter(items => items.brand_id === brandId);

      res.json({
        stores
      });

    });

  }
};

