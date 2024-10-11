import React from 'react';
import '../App.css';


function Tugas6() {
    let nama = 'Ariq';
    return (
        <>
            {/* <div className = "App" >
                <div className = 'title' >
                <h1> Hi, Saya {nama} </h1> 
                    <hr></hr> 
                    <p>Saya dari Batch 36 sudah berhasil menginstall React </p> 
                </div> 
            </div> */}

            <div className='flex justify-center items-center min-h-screen shadow-lg'>
                <div className="flex flex-col justify-center items-center content-center max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hi, Saya {nama}</h1>
                    <hr className='w-full my-4 border-t-2 border-gray-300'></hr> 
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Saya dari Batch 36 sudah berhasil menginstall React</p>
                </div>
            </div>
        </> 
    );
}

export default Tugas6;