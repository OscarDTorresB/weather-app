import React from 'react'

const about = () => {
    return (
        <div className='container mx-auto bg-white shadow flex flex-col py-6 sm:shadow-2xl sm:px-4 sm:py-8'>
            <div className='flex flex-col font-bold mb-6 px-4 sm:px-8'>
                <h1 className='text-green-600 text-4xl sm:text-center md:text-3xl'>The Weather App</h1>
                <h3 className='text-gray-400 text-lg sm:text-center md:text-md'>Designed by Oscar Torres</h3>
            </div>
            <div className='text-gray-800 text-lg border-4 border-dashed px-2 mx-2 sm:px-4 sm:mx-4 sm:text-md md:text-sm'>
                <p>This is a free web application designed using React and Hooks and doesn't have any commercial purpouse.
                    The weather forecasts are provided by Open Weather Map's API.
                </p>
                <br/>
                <p>This website it's complying the GitHub's terms & conditions since it's being hosted on GitHub Pages.</p>
            </div>
        </div>
    )
}

export default about;