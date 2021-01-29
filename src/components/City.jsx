import React from 'react';

const city = ({city}) => {

    return (
        <div>
            <hr/>
            <div className="bg-white shadow mx-auto container p-4 mt-4">
                <div className='border p-4 flex flex-col items-center'>
                    <h2 className='font-bold m-4 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>{city.name}</h2>
                    <div className="flex flex-col">
                        <span><strong className='text-green-500'>Temperature:</strong> {city.temp} ºF 🌡 </span>
                        <span><strong className='text-green-500'>Main event:</strong> {city.weather}</span>
                        <span><strong className='text-green-500'>Wind:</strong> {city.wind} m/h 🌬 </span>
                        <span><strong className='text-green-500'>Sky coverage:</strong> {city.clouds}% ☁ </span>
                        <span><strong className='text-green-500'>Latitude:</strong> {city.latitud}º 🗺 </span>
                        <span><strong className='text-green-500'>Longitude:</strong> {city.longitud}º</span>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default city