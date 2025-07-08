const express = require("express");
const products = require("./products.json");

const app = express();
app.use(express.json());

app.get("../api/products.json", (req, res) => {
  res.json(products);
});

app.get("/api/products/filter", (req, res) => {
  let filteredProducts = products;
  if (req.query.color) {
    filteredProducts = filteredProducts.filter((product) =>
      product.colors.includes(req.query.color)
    );
  }
  if (req.query.minPrice && !isNaN(parseFloat(req.query.minPrice))) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseFloat(req.query.minPrice)
    );
  }
  if (req.query.maxPrice && !isNaN(parseFloat(req.query.maxPrice))) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseFloat(req.query.maxPrice)
    );
  }
  res.json(filteredProducts);
});

module.exports = app;
