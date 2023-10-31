import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0.0,
  totalItem: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // if (
      //   state.items.length > 0 &&
      //   state.items.find((item) => item.id === action.payload.id)
      // ) {
      //   const existingCartItemIndex = state.items.findIndex(
      //     (item) => item.id === action.payload.id
      //   );
      //   state.items[existingCartItemIndex].amount += action.payload.amount;
      // } else {
      //   state.items.push(action.payload);
      // }
      // state.totalAmount += action.payload.price * action.payload.amount;
      // state.totalItem += action.payload.amount;
      const uptadedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      let updatedItem;
      if (existingCartItem) {
        if (action.payload.isCart === true) {
          updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + 1,
          };
        } else {
          updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.payload.amount,
          };
        }
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      let updatedTotalItem;

      if (action.payload.isCart === true) {
        updatedTotalItem = state.totalItem + 1;
      } else {
        updatedTotalItem = state.totalItem + action.payload.amount;
      }
      return {
        items: updatedItems,
        totalAmount: uptadedTotalAmount,
        totalItem: updatedTotalItem,
      };
    },
    removeItem: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalItem: state.totalItem - 1,
      };
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
