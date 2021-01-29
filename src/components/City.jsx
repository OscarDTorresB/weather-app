import React from 'react';

const city = ({city}) => {

    return (
        <div>
            <hr/>
            <div className="bg-white shadow mx-auto container p-4 mt-4">
                <div className='border p-4'>
                    <h2 className='font-bold m-4 text-2xl text-center'>{city.name}</h2>
                    <div className="flex flex-col">
                        <span><strong>Temperature:</strong> {city.temp} ºF</span>
                        <span><strong>Main event:</strong> {city.weather}</span>
                        <span><strong>Wind:</strong> {city.wind} m/h</span>
                        <span><strong>Sky coverage:</strong> {city.clouds}%</span>
                        <span><strong>Latitude:</strong> {city.latitud}º</span>
                        <span><strong>Longitude:</strong> {city.longitud}º</span>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default city