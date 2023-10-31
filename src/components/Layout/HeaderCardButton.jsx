import React, { useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCardButton.css";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const HeaderCardButton = () => {
  const totalItem = useSelector((state) => state?.cart?.totalItem);
  const selector = useSelector((state) => state?.cart);
  console.log(selector);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    if (selector?.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [selector?.items]);

  return (
    <div>
      <button
        className={`cursor-pointer font-inherit border-none bg-[#4d1601] text-white py-3 px-12 flex justify-around items-center rounded-full font-bold hover:bg-[#2c0d00] active:[#2c0d00]
       ${btnIsHighlighted ? classes.bump : ""}`}
        onClick={showCartHandler}
      >
        <span className="w-5 h-5 mr-2 text-white z-50">
          <CartIcon />
        </span>
        <span className=" text-xs sm:text-sm md:text-md">Your Cart</span>
        <span className="badge bg-[#b94517] py-1 px-4 rounded-full ml-4 font-bold">
          {totalItem}
        </span>
      </button>
      {cartIsShown && <Cart handleClose={hideCartHandler} />}
    </div>
  );
};

export default HeaderCardButton;
