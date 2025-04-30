import Image from 'next/image';
import React from 'react';

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
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {ProductList.map((product, index) => (
        <div key={index} className="bg-white p-6 m-4 rounded-xl shadow-md w-full max-w-sm">
          <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-60 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="mt-2 text-lg font-bold">${product.price}</p>
          <p className="text-yellow-500">{product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
