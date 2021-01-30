import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="bg-white shadow-lg mb-4">
      <div className="flex flex-col items-center p-5 sm:flex-row sm:justify-between">
        <div className="font-bold text-2xl sm:h-full sm:w-1/3">
          <Link to="/weather-app">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400">
              Weather App
            </span>
          </Link>
        </div>
        <div className=" font-semibold text-xl py-2 sm:py-0 sm:text-center sm:w-1/3 text-gray-800 hover:text-gray-600">
          <Link to="/weather-app/About">
            <span>About</span>
          </Link>
        </div>
        <div className="py-2 sm:py-0 w-1/3 flex justify-center">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
