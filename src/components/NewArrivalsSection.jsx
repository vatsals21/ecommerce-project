import React from "react";
import Shoe_Pic_1 from "../assets/images/shoe_pic_1.jpg";

const NewArrivalsSection = () => {
  const new_arrival_shoes = [
    {
      key: 1,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
    },
    {
      key: 2,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
    },
    {
      key: 3,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
    },
    {
      key: 4,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
    },
    {
      key: 5,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
    },
    {
      key: 6,
      shoe_name: "Puma SI Trainers",
      shoe_image: Shoe_Pic_1,
    },
  ];

  return (
    <div className="bg-gradient-to-b h-96 from-blue-300 via-blue-500 to-blue-800 col-span-2 flex flex-col">
      <div className="font-bold mt-12 ml-12 text-2xl">NEW ARRIVALS</div>
      <div className="flex flex-row ml-20 mt-10   ">
        {new_arrival_shoes.map(({ key, shoe_name, shoe_image }) => {
          return (
            <div className="flex flex-col">
              <img src={shoe_image} alt="Shoe Pic" className="h-20 mr-12" />
              <div>{shoe_name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
