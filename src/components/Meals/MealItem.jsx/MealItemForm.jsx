import React from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amount, setAmount] = React.useState(1);
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddToCart(parseInt(amount));
  };
  return (
    <form className="text-center " onSubmit={submitHandler}>
      <Input
        value={amount}
        handleChange={(e) => setAmount(e.target.value)}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button
        type="submit"
        className="font-inherit cursor-pointer bg-[#8a2b06] border border-[#8a2b06] text-white py-1 px-8 rounded-[20px] transition-colors font-bold hover:bg-[#8a2b06] active:bg-[#8a2b06] hover:border-[#8a2b06] active:border-[#8a2b06]"
      >
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
