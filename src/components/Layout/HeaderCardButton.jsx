import React from "react";
import CartIcon from "../Cart/CartIcon";
import "../Layout/HeaderCardButton.css";

const HeaderCardButton = () => {
  return (
    <button className="button cursor-pointer font-inherit border-none bg-[#4d1601] text-white py-3 px-12 flex justify-around items-center rounded-full font-bold hover:bg-[#2c0d00] active:[#2c0d00]">
      <span className="w-5 h-5 mr-2 text-white z-50">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge bg-[#b94517] py-1 px-4 rounded-full ml-4 font-bold">
        3
      </span>
    </button>
  );
};

export default HeaderCardButton;
