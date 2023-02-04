import React from "react";
import Shoe_Pic_1 from "../assets/images/shoe_pic_1.jpg";
import ProductCard from "./ProductCard";

const NewArrivalsSection = () => {
  const new_arrival_shoes = [
    {
      key: 1,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
      shoe_price: 10000,
    },
    {
      key: 2,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
      shoe_price: 10000,
    },
    {
      key: 3,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
      shoe_price: 10000,
    },
    {
      key: 4,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
      shoe_price: 10000,
    },
    {
      key: 5,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
      shoe_price: 10000,
    },
    {
      key: 6,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
      shoe_price: 10000,
    },
  ];

  return (
    <div className="bg-gradient-to-b h-96 from-blue-300 via-blue-500 to-blue-800 col-span-2 flex flex-col">
      <div className="font-bold font-sans mt-12 ml-12 text-2xl">
        NEW ARRIVALS
      </div>
      <div className="flex flex-row ml-20 mt-7 overflow-x-hidden w-10/12 overflow-y-hidden">
        {new_arrival_shoes.map(({ key, shoe_name, shoe_image, shoe_price }) => {
          return (
            <ProductCard
              key={key}
              shoe_name={shoe_name}
              shoe_image={shoe_image}
              shoe_price={shoe_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
