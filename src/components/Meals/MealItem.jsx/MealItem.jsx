import React from "react";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  return (
    <li>
      <div className="flex justify-between m-4 pb-4 border-b border-gray-300">
        <h3 className="mb-1">{props.meal.name}</h3>
        <div className="italic">{props.meal.description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-xl">{price}</div>
        <div>
          <MealItemForm />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
