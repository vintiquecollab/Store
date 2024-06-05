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
            <h1 className="text-4xl font-bold py-8">
              Rediscover Classic Entertainment with Vintage TVs
            </h1>
            <p>
              Explore our curated collection of vintage TVs. Relive the golden
              age of broadcasting with timeless designs and nostalgic charm.
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">
              SHOP
            </button>
          </div>
          <img src="src\assets\tv.png" alt="" className="w-[2] h-[2]" />
        </div>
        <div className="!flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold py-8">
              {" "}
              Timeless Elegance: Vintage Cars that Define an Era
            </h1>
            <p>
              Experience the elegance and charm of classic automotive history
              with our curated collection of vintage cars.
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">
              SHOP
            </button>
          </div>
          <img src="src\assets\car.png" alt="" />
        </div>
        <div className="!flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold py-8">
              Capture Timeless Moments with Vintage Cameras
            </h1>
            <p>
              Capture history with our curated vintage cameras. Perfect for
              enthusiasts and collectors alike.
            </p>
            <button className="border rounded-full w-[120px] my-6 bg-red-300 text-2xl cursor-pointer">
              SHOP
            </button>
          </div>
          <img src="src\assets\camera.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
