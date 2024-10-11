import React from 'react';
import {useState} from 'react';

const Tugas8 = () => {
    const [number, setNumber] = useState(1);

    const handleNumber = () => {
        setNumber(number + 1);
        
    }
    return(
        <>
        {/* <div className='App'>
            <div className='title'>
                <p id='number'>{number}</p>
                <button className='btn rounded' onClick={handleNumber}>Tambah</button>
                {number > 10 && <span>State count sudah lebih dari 10!</span>}
            </div>
        </div> */}

        <div className='flex justify-center items-center min-h-screen shadow-lg'>
            <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <p id='number' className='text-center mb-3 font-normal text-gray-700 dark:text-gray-400'>{number}</p>
                <button type='button' className='w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={handleNumber}>Tambah</button>
                {number > 10 && <span className='grid mt-5 mb-3 font-normal text-gray-700 dark:text-gray-400'>State count sudah lebih dari 10!</span>}
            </div>
        </div>
        </>
    )
}

export default Tugas8;