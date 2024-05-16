import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-6 bg-gray-100 p-6 px-4">
      <Slider {...settings}>
        <div className="!flex items-center justify-center px-4">
          <div>
            <h1 className="text-4xl font-bold py-8">MacBook Pro 13</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              corporis voluptate eveniet ullam architecto. Quod impedit quia
              repudiandae nostrum tenetur aspernatur assumenda culpa odit et, at
              earum est hic error.
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">
              SHOP
            </button>
          </div>
          <img src="src\assets\mac.png" alt="" className="w-[2] h-[2]" />
        </div>
        <div className="!flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold py-8">Fashion</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              corporis voluptate eveniet ullam architecto. Quod impedit quia
              repudiandae nostrum tenetur aspernatur assumenda culpa odit et, at
              earum est hic error.
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">
              SHOP
            </button>
          </div>
          <img src="src\assets\clothes.png" alt="" />
        </div>
        <div className="!flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold py-8">Art</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              corporis voluptate eveniet ullam architecto. Quod impedit quia
              repudiandae nostrum tenetur aspernatur assumenda culpa odit et, at
              earum est hic error.
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">
              SHOP
            </button>
          </div>
          <img src="src\assets\art.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
