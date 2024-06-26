import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/slices/cartSlice";
import CartComp from "../components/cart/CartComp";
import Navbar from "../components/Navbar";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "hepsi");
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex justify-end text-xl font-bold ">
            TOTAL:{" "}
            <span className="text-green-600 text-2xl ml-2">
              {totalAmount} DH{" "}
            </span>
          </div>
        </div>
      ) : (
        <div>No products...</div>
      )}
    </div>
  );
};

export default Cart;
