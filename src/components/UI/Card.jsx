import React from "react";

const Card = (props) => {
  return (
    <div className="mt-10 max-w-[800px] m-auto p-4 shadow-md rounded-[14px] bg-white">
      {props.children}
    </div>
  );
};

export default Card;
