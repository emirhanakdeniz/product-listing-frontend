import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("yellow");

  const colors = [
    { name: "Yellow Gold", value: "yellow", hex: "#E6CA97" },
    { name: "White Gold", value: "white", hex: "#D9D9D9" },
    { name: "Rose Gold", value: "rose", hex: "#E1A4A9" },
  ];

  // Debug: Log product data and rendering info
  useEffect(() => {
    console.log("Product:", product);
    console.log("Selected Color:", selectedColor);
    console.log("Image URL:", product.images?.[selectedColor]);
    console.log("Popularity Score:", product.popularityScore);
    console.log("Colors Array:", colors);
  }, [product, selectedColor]);

  // Function to render star rating
  const renderStars = (score) => {
    if (!score || isNaN(parseFloat(score))) {
      console.warn("Invalid popularityScore:", score);
      return (
        <span className="font-avenir text-[14px]">Rating Unavailable</span>
      );
    }
    const parsedScore = parseFloat(score);
    const fullStars = Math.floor(parsedScore);
    const hasHalfStar = parsedScore % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex justify-center items-center gap-1 star-container">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar
            key={`full-${i}`}
            className="inline-block w-4 h-4"
            style={{ color: "#F4D03F" }}
          />
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt
            key="half"
            className="inline-block w-4 h-4"
            style={{ color: "#F4D03F" }}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar
            key={`empty-${i}`}
            className="inline-block w-4 h-4"
            style={{ color: "#F4D03F" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="border border-gray-200 rounded-3xl p-4 w-48 text-left bg-white">
      <img
        src={
          product.images?.[selectedColor] || "https://via.placeholder.com/150"
        }
        alt={product.name || "Product Image"}
        className="w-full h-32 object-cover mb-4 rounded-3xl"
      />
      <h2 className="font-montserrat font-medium text-[15px] mb-2">
        {product.name || "Unnamed Product"}
      </h2>
      <p className="font-montserrat text-[15px] mb-2">
        {product.price ? `$${product.price} USD` : "Price Unavailable"}
      </p>
      <div className="flex justify-start gap-2 my-2 color-picker-container">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`w-6 h-6 rounded-full transition-all duration-200 color-picker-button ${
              selectedColor === color.value
                ? "selected-color"
                : "border border-gray-300"
            }`}
            style={{
              backgroundColor: color.hex,
              minWidth: "24px",
              minHeight: "24px",
            }}
            onClick={() => {
              console.log("Color clicked:", color.value);
              setSelectedColor(color.value);
            }}
            title={color.name}
          />
        ))}
      </div>
      <p className="font-avenir text-[12px] mb-2">
        {colors.find((c) => c.value === selectedColor)?.name || "Unknown Color"}
      </p>
      <div className="flex justify-center items-center gap-3">
        {renderStars(parseFloat(product.popularityScore))}
        <p className="font-avenir text-[14px]">
          {product.popularityScore ? `${product.popularityScore}/5` : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
