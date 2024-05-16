import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    // Main Navbar
    <div className="flex justify-between items-center  ">
      {/* Left Navbar */}
      <div
        className="text-6xl mx-12 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src=".\src\images\vintique.png"
          alt="logo"
          className="w-[150px] h-[150px]"
        />
      </div>
      {/* Right Navbar */}
      <div className="flex items-center gap-8 mx-12">
        <div
          className="flex items-center border
        p-3 rounded-full bg-gray-100"
        >
          <input
            className="bg-gray-100 outline-none px-3"
            type="text"
            placeholder="Search"
          />
          <BiSearch size={28} className="hover:animate-pulse" />
        </div>
        {/* <AiOutlineHeart size={28} /> */}
        <div onClick={() => navigate("cart")} className="relative">
          <div
            className="absolute -top-3 -right-3 bg-red-500
          text-white rounded-full w-5 h-5 flex items-center justify-center "
          >
            {itemCount}
          </div>
          <SlBasket size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
