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
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen rounded-md">
      <div className="border-b pb-1 text-xl px-2">Category</div>
      {categories?.map((category) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg mt-1.5 cursor-pointer hover:bg-gray-200 p-2"
          key={category._id} // Assuming _id is unique
        >
          {category.name} {/* Render the name property */}
        </div>
      ))}
    </div>
  );
};

export default Category;
