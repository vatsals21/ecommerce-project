import React from "react";

const CartPopUp = (props) => {
  return (
    <div className="flex justify-end fixed top-12 right-16 bg-gray-100">
      <div className="flex flex-col text-3xl justify-center items-center h-24 w-40 border-2 border-gray-400 shadow-md shadow-blue-800">
        <div className="text-blue-800 text-base flex justify-center">
          The cart is empty
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
