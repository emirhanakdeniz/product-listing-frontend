import products from "../products.json";

export default function handler(req, res) {
  let filteredProducts = products;
  const { color, minPrice, maxPrice } = req.query;

  if (color) {
    filteredProducts = filteredProducts.filter((p) => p.colors.includes(color));
  }
  if (minPrice && !isNaN(parseFloat(minPrice))) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= parseFloat(minPrice)
    );
  }
  if (maxPrice && !isNaN(parseFloat(maxPrice))) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price <= parseFloat(maxPrice)
    );
  }

  res.status(200).json(filteredProducts);
}
