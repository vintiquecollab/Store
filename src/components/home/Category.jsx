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
    <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-2 text-xl font-semibold text-gray-800 mb-4">
        Categories
      </div>
      <div className="overflow-hidden">
        {categories?.map((category) => (
          <div
            onClick={() => setCategory(category)}
            className="text-lg cursor-pointer hover:bg-gray-100 p-3 rounded-md transition-colors duration-300 ease-in-out"
            key={category._id} // Assuming _id is unique
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
