import ExternalLink from './Icons';

const footer = () => {
    return (
        <div className='bg-white flex flex-col mt-4 sm:flex-row sm:justify-center sm:items-center sm:pt-4 sm:pb-4 sm:divide-x'>
            <div className='flex justify-center mt-4 sm:mt-0'>
                <span className='text-gray-800 text-lg font-bold border-2 border-dashed px-3 py-2 rounded'>Follow me!</span>
            </div>
            <div className='flex justify-center'>
                <div className='p-5'>
                    <a href='https://twitter.com/oscardtorresb' target='_blank' rel='noreferrer' className='flex flex-col items-center'>
                        <ExternalLink className='w-7'/>
                        <label>Twitter</label>
                    </a>
                </div>
                <div className='p-5'>
                    <a href='https://www.linkedin.com/in/oscardtorresb/' target='_blank' rel='noreferrer' className='flex flex-col items-center'>
                        <ExternalLink className='w-7'/>
                        <label>LinkedIn</label>
                    </a>
                </div>
                <div className='p-5'>
                    <a href='https://github.com/LeonidasGangsta/' target='_blank' rel='noreferrer' className='flex flex-col items-center'>
                        <ExternalLink className='w-7'/>
                        <label>GitHub</label>
                    </a>
                </div>
            </div>
            <div className='flex justify-center text-sm mb-2 sm:mb-0 sm:h-full sm:items-center sm:justify-items-center'>
                <span className='font-semibold text-gray-500'>This app was made by Oscar Torres ✌ </span>
            </div>  
        </div>
    )
}

export default footer;