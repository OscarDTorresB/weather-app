import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
      className="flex justify-center sm:mr-4"
    >
      <input
        type="text"
        placeholder="City..."
        value={city}
        arial-label="City to add"
        onChange={(e) => setCity(e.target.value)}
        className="bg-gray-100 border rounded-full py-1 pl-3 mr-1 sm:mr-2 text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="submit"
        aria-label="Add city"
        className="rounded-full px-2 py-1 bg-green-500 hover:bg-green-600 text-white font-bold cursor-pointer focus:outline-none"
        value="Add city"
      />
    </form>
  );
}
