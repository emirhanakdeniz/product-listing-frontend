/* eslint-disable no-undef */

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.resolve(process.cwd(), "products.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  let products = JSON.parse(fileData);

  const { color, minPrice, maxPrice } = req.query;

  if (color) {
    products = products.filter((p) => p.colors.includes(color));
  }
  if (minPrice && !isNaN(parseFloat(minPrice))) {
    products = products.filter((p) => p.price >= parseFloat(minPrice));
  }
  if (maxPrice && !isNaN(parseFloat(maxPrice))) {
    products = products.filter((p) => p.price <= parseFloat(maxPrice));
  }

  res.status(200).json(products);
}
