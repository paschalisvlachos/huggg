const fse = require('fs-extra')

module.exports = {
  productsBrandIdApi: (req, res) => {
    const brandId = req.params.brandId;

    fse.readFile('brands.json', (err, data) => {
      if (err) throw err;
      let parsedContent = JSON.parse(data);

      const filtered = parsedContent.embedded.products.filter(items => items.brand_id === brandId);

      var output = filtered.map(item => { return {
        "description": item.description,
        "label": item.label,
        "price": item.price,
        "over_18_offer": item.over_18_offer,
        "image": item.image,
        "subtitle": item.subtitle,
        "weight": item.description,
        "recipient_description": item.recipient_description,
        "handling_fee": item.handling_fee,
        "sale_price": item.sale_price,
        "vat": item.vat,
        "brand_name": item.brand_name,
        "image_url": item.image_url
      }});

      res.json({
        output
      });

    });

  }
};

