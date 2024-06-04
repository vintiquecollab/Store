import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product._id}`)}
      className="group relative overflow-hidden w-[350px] h-[300px] mx-4 my-6 rounded-xl shadow-lg bg-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative">
        <img
          className="w-full h-40 object-cover rounded-t-xl"
          src={product?.media.url}
          alt={product?.title}
        />
        <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product?.price} <span className="text-xs">DH</span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-md font-bold mb-2">{product?.title}</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`products/${product._id}`);
          }}
          className="block w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;
