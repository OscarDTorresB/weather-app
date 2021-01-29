import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {

  if(cities.length) return (
    <div className='flex justify-around flex-wrap pb-6'>
      {cities.map((c, index) => <Card
          key={index}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  ); else {
    return (
      <div className='container mx-auto shadow-lg bg-white flex flex-col px-4 py-6'>
        <h2 className='uppercase font-bold text-center text-green-600 py-2 border-2 border-dashed'>There are no cities added yet...</h2>
        <br/>
        <p className='text-gray-700'>To add a city, go to the text input on the navigation bar and write the name of the city that you want to add and press the green button.</p>
        <p className='text-gray-700'>If you want to check the details of a city, just add it and then click on its card.</p>
      </div>
    )
  }
}
