import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="City..."
        value={city}
        arial-label='City to add'
        onChange={e => setCity(e.target.value)}
        className='shadow border sm:border-none py-1 px-2 mr-2 sm:focus:outline-none sm:focus:ring-2 sm:focus:ring-green-500'
      />
      <input type="submit"
      aria-label='Add city'
      className='px-2 py-1 bg-green-500 hover:bg-green-600 rounded text-white font-bold cursor-pointer'
      value="Add city"/>
    </form>
  );
}
