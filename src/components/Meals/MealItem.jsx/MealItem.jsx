import React from "react";
import MealItemForm from "./MealItemForm";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const dispatch = useDispatch();
  const addToCartHandler = (amount) => {
    dispatch(
      addItem({
        id: props?.meal?.id,
        name: props?.meal?.name,
        amount: amount,
        price: props?.meal?.price,
      })
    );
  };

  return (
    <li>
      <div className="max-w-[900px] flex justify-between font-lg m-4 pb-4 border-b border-gray-300">
        <div className="flex flex-col">
          <h3 className="mb-1 text-lg font-bold">{props.meal.name}</h3>
          <div className="italic">{props.meal.description}</div>
          <div className="mt-1 font-bold text-[#ad5502] text-xl">{price}</div>
        </div>
        <div className="mr-">
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
