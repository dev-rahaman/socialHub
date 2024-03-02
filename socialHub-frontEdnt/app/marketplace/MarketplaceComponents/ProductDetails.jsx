import React from "react";

const ProductDetails = ({ name, description, price, image }) => {
  return (
    <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <img className="h-64 w-full object-cover" src={image} alt={name} />
      <div className="flex items-center justify-between bg-gray-200 px-4 py-2">
        <p className="text-lg font-bold">${price}</p>
        <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
