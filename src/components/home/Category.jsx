import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slices/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg">
      <div className="border-b pb-4 text-2xl font-bold text-gray-800 mb-4">
        Categories
      </div>
      <div className="flex flex-col space-y-2">
        {categories?.map((category) => (
          <div
            key={category._id} // Assuming _id is unique
            onClick={() => setCategory(category)}
            className="text-lg font-medium cursor-pointer bg-gray-50 hover:bg-blue-50 hover:text-blue-600 p-3 rounded-lg transition-transform transform hover:scale-105 duration-200 ease-in-out"
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
