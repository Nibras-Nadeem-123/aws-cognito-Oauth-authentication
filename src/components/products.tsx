import Image from 'next/image';
import React from 'react';
import { Star } from 'lucide-react'; // Optional, use any star icon you like

const Products = () => {
  const ProductList = [
    {
      name: "Crocs Unisex Adult Classic Clog",
      image: "/product1.jpg",
      price: 49.99,
      rating: 4.8,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product2.jpg",
      price: 999.99,
      rating: 4.4,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product3.jpg",
      price: 999.99,
      rating: 4.4,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product3.webp",
      price: 999.99,
      rating: 4.4,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product4.jpg",
      price: 999.99,
      rating: 4.4,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product6.jpg",
      price: 999.99,
      rating: 4.4,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product7.jpg",
      price: 999.99,
      rating: 4.4,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product8.jpg",
      price: 999.99,
      rating: 4.4,
    },
    {
      name: "AUTOMET Women Shirts Summer Sweaters Short Sleeve Tunic Tops 2025 Dressy Casual Business Blouses",
      image: "/product9.jpg",
      price: 999.99,
      rating: 4.4,
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Products</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {ProductList.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-xs group"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-md font-semibold text-gray-900 line-clamp-2">{product.name}</h2>
              <p className="mt-2 text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                    fill={i < Math.round(product.rating) ? '#FACC15' : 'none'}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">{product.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
