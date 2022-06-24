import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { React, useEffect } from "react";
import Filters from "./components/Filter/Filters";
import Chart from "./components/Chart/Chart";

function App() {
  useEffect(() => {
    if (!window.localStorage.length) {
      window.localStorage.setItem("local", "en");
    }
  }, []);

  return (
    <div className="w-full p-6">
      <NavBar />
      <div className="lg:flex mt-7 sm:flex-none ">
        <Chart />
        <Filters />
      </div>
    </div>
  );
}

export default App;
