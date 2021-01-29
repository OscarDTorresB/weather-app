import React from 'react';
import {Link} from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
  
    return (
      <div className="shadow hover:shadow-lg mt-5 mx-2 px-4 py-2 bg-white">
        <div id="closeIcon" className="float-right">
            <button onClick={onClose} className="">X</button>
        </div>
        <Link to={`/weather-app/City/${id}`}>
        <div className="">
          <h5 className="font-bold text-xl">{name}</h5>
          <div className="flex mt-5">
            <div className="">
              <p className='font-bold'>Min</p>
              <p>{min}°</p>
            </div>
            <div className="pl-8">
              <p className='font-bold'>Max</p>
              <p>{max}°</p>
            </div>
            <div className="">
              <img className="" src={"https://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
};
