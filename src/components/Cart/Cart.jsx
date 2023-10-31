import React from "react";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { addItem, removeItem } from "../../store/cartSlice";

const Cart = ({ handleClose }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state?.cart);

  const cartItems = () => (
    <ul className="cart-items list-none m-0 p-0 max-h-80 overflow-auto">
      {selector?.items?.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => dispatch(removeItem(item.id))}
          onAdd={() =>
            dispatch(
              addItem({
                isCart: true,
                ...item,
              })
            )
          }
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={handleClose}>
      {cartItems()} {/* cartItems işlevini burada çağırın */}
      <div className="flex justify-between text-center font-bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>$ {selector?.totalAmount.toFixed(2)}</span>
      </div>
      <div className="text-right">
        <button
          className="font-inherit cursor-pointer border text-red-800 border-red-800 p-2 px-8 rounded-full ml-4 transition-colors hover:bg-red-700 hover:border-red-700 hover:text-white"
          onClick={handleClose}
        >
          Close
        </button>
        {selector?.totalItem > 0 && (
          <button className="font-inherit cursor-pointer border bg-red-800 border-red-800 p-2 px-8 rounded-full ml-4 transition-colors hover:bg-red-700 hover:border-red-700 hover:text-white text-white">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
