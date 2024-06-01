import React from "react";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <Navbar />
      <SliderComp />

      <div className="flex mt-12">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
