import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[45px] font-avenir text-center">Product List</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mt-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
