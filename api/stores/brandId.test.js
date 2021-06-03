const { storesBrandIdApi } = require('./brandId.js');

const mocks = {
  req: {
    params: {
      brandId: 'a715b837-f4fc-48ba-ba0a-7f53b6dc59c5'
    }
  },
  res: {
    send: jest.fn()
  }
};

const output = {
  "stores": [
      {
          "id": "1236a970-8e75-4c35-8aa6-1e37e204f334",
          "brand_id": "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
          "latitiude": "51.504108",
          "longitude": "-0.114614",
          "website": null,
          "name": "Crosstown Doughnuts (Waterloo)",
          "description": "Does not accept Coffee Anywhere. Fresh handcrafted doughnuts.",
          "visible": 1,
          "description_markdown": "",
          "image": "ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "image_url": "https://cdn.huggg.me/locations/ar388d0482c0da0500f78af4e0ddc9db1f6cd3aa81.png",
          "latitude": "51.504108"
      }
    ]
  };

describe("get stores", () => {
  test("must return array of stores", () => {
    expect(storesBrandIdApi(mocks.req, mocks.res)).toContain(output);
  });
});