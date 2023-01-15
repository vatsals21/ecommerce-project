import React from "react";
import Collection_Page_Pic1 from "../assets/images/collection_pic.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const HomePageSection = () => {
  const shop_button = [
    {
      key: 1,
      sb_name: "Men",
    },
    {
      key: 2,
      sb_name: "Women",
    },
    {
      key: 3,
      sb_name: "Kids",
    },
  ];

  return (
    <div className="col-span-2 bg-gradient-to-b from-stone-500 via-stone-700 to-stone-900 grid grid-cols-2 h-96">
      <div className="flex flex-col items-start justify-center mb-16 ml-52">
        {shop_button.map(({ key, sb_name }) => {
          return (
            <button
              key={key}
              onClick={() => {}}
              className="flex flex-row group p-3 mt-2 bg-slate-200 border-2 rounded-md border-slate-800 hover:scale-110 hover:opacity-90 duration-200"
            >
              SHOP {sb_name.toUpperCase()}{" "}
              <HiArrowLongRight className="mt-1 ml-3 group-hover:rotate-90 duration-300" />
            </button>
          );
        })}
      </div>
      {/* <div className="flex items-center justify-end"> */}
      <img
        src={Collection_Page_Pic1}
        alt="Shoes Collection"
        className="w-full h-96"
      />
      {/* </div> */}
    </div>
  );
};

export default HomePageSection;
