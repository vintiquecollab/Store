import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import logo from "../assets/vintique.png";
import {
  AiOutlineHeart,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { fetchProfileUser } from "../redux/slices/custemerLogin";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.carts);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProfileUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Suppression du token depuis le local storage
    localStorage.removeItem("token");

    // Affichage d'un message de déconnexion
    alert("Vous avez été déconnecté avec succès. À bientôt!");
    navigate("/");
    window.location.reload();

    // Ajout d'une logique de redirection si nécessaire
    console.log("Logout clicked");
  };

  return (
    // Main Navbar
    <div className="flex justify-between items-center">
      {/* Left Navbar */}
      <div
        className="text-6xl mx-12 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
      </div>
      {/* Right Navbar */}
      <div className="flex items-center gap-8 mx-12">
        <div className="flex items-center border p-3 rounded-full bg-gray-100">
          <input
            className="bg-gray-100 outline-none px-3"
            type="text"
            placeholder="Search"
          />
          <BiSearch size={28} className="hover:animate-pulse" />
        </div>
        <div onClick={() => navigate("/cart")} className="relative">
          <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </div>
          <SlBasket size={28} className="cursor-pointer" />
        </div>
        {isLoggedIn && user ? (
          <div className="relative">
            <div
              onClick={handleDropdownToggle}
              className="flex items-center cursor-pointer"
            >
              <span className="font-bold text-xl">{user.name}</span>
              <img
                src={user.image.url}
                alt="avatar"
                className="w-8 h-8 rounded-full ml-2"
              />
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                <div
                  onClick={() => navigate("/profile")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Profile
                </div>
                <div
                  onClick={handleLogout}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div onClick={() => navigate("/login")} className="cursor-pointer">
              <AiOutlineLogin size={28} />
            </div>
            <div onClick={() => navigate("/signup")} className="cursor-pointer">
              <AiOutlineUserAdd size={28} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
