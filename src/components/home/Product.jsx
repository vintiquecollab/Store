import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product._id}`)}
      className="group   h-[380px] max-w-xs p-6 m-4 border border-gray-200 rounded-xl shadow-lg relative h-96 cursor-pointer hover:shadow-2xl transition-shadow duration-300 bg-white"
    >
      <div className="text-2xl font-bold absolute rounded-full top-2 p-2 right-1.5 bg-black text-white">
        {" "}
        {product?.price} <span className="text-sm">DH</span>{" "}
      </div>
      <img
        className="w-56 h-56 object-contain m-auto mb-4"
        src={product?.media.url}
        alt={product?.title}
      />
      <div className="text-center font-extrabold text-lg mt-4">
        {product?.title}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(`products/${product._id}`);
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        View Details
      </button>
    </div>
  );
};

export default Product;
