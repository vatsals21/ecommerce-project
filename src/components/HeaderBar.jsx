import React, { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import CartPopUp from "./CartPopUp";

const HeaderBar = () => {
  const categories = [
    {
      id: 1,
      c_name: "Collections",
      c_page: "<CollectionsPage />",
    },
    {
      id: 2,
      c_name: "Mens",
      c_page: "<MensPage />",
    },
    {
      id: 3,
      c_name: "Womens",
      c_page: "<CollectionsPage />",
    },
    {
      id: 4,
      c_name: "Kids",
      c_page: "<CollectionsPage />",
    },
    {
      id: 5,
      c_name: "Contact",
      c_page: "<CollectionsPage />",
    },
  ];

  //   const cart_count = 0;
  //   const [showPopUp, setShowPopUp] = useState(false);
  const [showEmptyCart, setShowEmptyCart] = useState(false);

  return (
    <div className="w-full cursor-default fixed bg-gray-100 mt-0">
      <div className="flex flex-row p-4">
        <div className="font-semibold italic text-2xl ml-12 mr-7 text-slate-700 hover:animate-pulse hover:text-green-700 duration-200">
          ECommerce-Shoes
        </div>
        <div className="flex flex-row space-x-7 ml-9 p-2 cursor-pointer">
          {categories.map(({ id, c_name, c_page }) => {
            return (
              <ul
                key={id}
                className="text-gray-700 hover:scale-110 hover:text-black duration-200"
                // onClick={(c_link)=>}
              >
                {/* <a href="#" rel="noreferrer"> */}
                {c_name}
                {/* </a> */}
              </ul>
            );
          })}
        </div>
        <div className="flex flex-row ml-96 pl-64">
          <BsCartDash
            className="text-2xl mt-2 text-blue-800 cursor-pointer"
            onMouseEnter={() => {
              setShowEmptyCart(true);
            }}
            onMouseLeave={() => {
              setShowEmptyCart(false);
            }}
          />
        </div>
      </div>
      {showEmptyCart && <CartPopUp />}
    </div>
  );
};

export default HeaderBar;
