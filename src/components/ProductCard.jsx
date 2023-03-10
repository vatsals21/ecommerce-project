import React from "react";

const ProductCard = (props) => {
  const { shoe_image, shoe_name, key, shoe_price } = props;
  return (
    <div className="flex flex-col hover:scale-110 duration-200" key={key}>
      <div className="bg-slate-200 mx-3 h-fit rounded-md">
        <img
          src={shoe_image}
          alt="Shoe Pic"
          className="mr-12 cursor-pointer p-3"
        />
        <div className="flex justify-between p-2">
          <div className="font-serif text-slate-800 p-3">{shoe_name}</div>
          <div className="font-serif font-bold p-3">Rs. {shoe_price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
