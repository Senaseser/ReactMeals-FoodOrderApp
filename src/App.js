import "./App.css";
import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <main className="h-screen">
      <Header />
      <Meals></Meals>
    </main>
  );
}

export default App;
