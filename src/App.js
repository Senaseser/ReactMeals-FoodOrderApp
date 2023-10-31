import "./App.css";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "../src/store/CartProvider";

import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  

  
  return (
    <Provider store={store}>
      <Header />
      <Meals></Meals>
    </Provider>
  );
}

export default App;
