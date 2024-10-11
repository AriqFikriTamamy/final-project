import React from 'react';
import '../App.css';

function Tugas7(props){
    return(
        <>
            {/* <div className="App">
                <div className='title'>
                    <h1>Data diri peserta kelas Reactjs</h1>
                    <hr></hr>
                    <ul>
                        <li className='font-bold'>Nama Lengkap: <span className='font-normal'>{props.name}</span></li>
                        <li className='font-bold'>Email: <span className='font-normal'>{props.email}</span></li>
                        <li className='font-bold'>Batch Pelatihan: <span className='font-normal'>{props.batch}</span></li>
                    </ul>
                </div>
            </div> */}

            <div className='flex justify-center items-center min-h-screen shadow-lg'>
                <div className="flex flex-col justify-center items-center content-center max-w-md p-10 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data diri peserta kelas Reactjs</h1>
                    <hr className='w-full my-4 border-t-2 border-gray-300'></hr> 
                    <ul className='list-disc mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        <li className='font-bold'>Nama Lengkap: <span className='font-normal'>{props.name}</span></li>
                        <li className='font-bold'>Email: <span className='font-normal'>{props.email}</span></li>
                        <li className='font-bold'>Batch Pelatihan: <span className='font-normal'>{props.batch}</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Tugas7;