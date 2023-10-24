import React from "react";

const Input = (props) => {
  return (
    <div className="flex items-center mb-2">
      <label className="font-bold mr-4" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        className="w-12 rounded-md text-inherit pl-2 border border-gray-300 "
        id={props.input.id}
        {...props.input}
      ></input>
    </div>
  );
};

export default Input;
