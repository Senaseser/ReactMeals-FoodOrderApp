import React from "react";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = () => {
  return (
    <Fragment>
      <div className="max-w-full ">
        <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center px-10 shadow-md z-10  overflo ">
          <h1>ReactMeals</h1>
          <HeaderCardButton />
        </header>
        <div className="max-w-full min-w-full w-[120%] h-[25rem] z-0   overflow-x-hidden flex overflow-y-hidden">
          <img
            className=" min-w-[120%] transform rotate-[-5deg] -translate-y-16 -translate-x-10 object-cover"
            src={mealsImage}
            alt="resim"
          ></img>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
