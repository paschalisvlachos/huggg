const fse = require('fs-extra')

module.exports = {
  brandsBrandIdApi: (req, res) => {
    const brandId = req.params.brandId;

    fse.readFile('brands.json', (err, data) => {
      if (err) throw err;
      let parsedContent = JSON.parse(data);

      const filteredBrands = parsedContent.data.filter(item => item.id === brandId);

      res.json({
        "brandName": filteredBrands[0].name
      });
    });

  }
};