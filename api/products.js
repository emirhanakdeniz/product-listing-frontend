/* eslint-disable no-undef */
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.resolve(process.cwd(), "products.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(fileData);
  res.status(200).json(products);
}
