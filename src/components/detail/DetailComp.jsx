import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?._id,
        title: productDetail?.title,
        image: productDetail?.media?.url,
        quantity: quantity,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-100 h-100 object-cover my-auto"
        src={productDetail?.media?.url}
        alt={productDetail?.title}
      />
      <div className="flex flex-col gap-4 my-auto mx-3">
        <h1 className="text-4xl font-bold">{productDetail?.title}</h1>
        <p className="text-lg">{productDetail?.description}</p>
        <div className="text-red-500 text-lg">
          {/* Rating : {productDetail?.rating.rate} */}
        </div>
        {/* <div>Count : {productDetail?.rating.count}</div> */}
        <div className="text-4xl font-extrabold text-green-600">
          {productDetail?.price} <span className="text-sm">DH</span>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={decrement} className="text-4xl cursor-pointer">
            -
          </button>
          <input
            type="text"
            value={quantity}
            className="w-20 text-center text-2xl font-semibold rounded-full bg-gray-100"
            disabled
          />
          <button onClick={increment} className="text-4xl cursor-pointer">
            +
          </button>
        </div>
        <button
          className="border w-48 h-16 text-xl rounded-lg my-2 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-black font-bold transition duration-300 ease-in-out"
          onClick={addBasket}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailComp;
