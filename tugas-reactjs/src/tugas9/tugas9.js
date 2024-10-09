import React from 'react';

function Tugas9(){
    return(
            <div className="w-full flex inline-flex items-center justify-center overflow-x-auto shadow-md rounded-lg">
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10 mb-10 border-collapse border shadow-md rounded-lg">
                    <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-gray-700 dark:text-white-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mata Kuliah
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nilai
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Index Nilai
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                John
                            </td>
                            <td className="px-6 py-4">
                                Algoritma
                            </td>
                            <td className="px-6 py-4">
                                80
                            </td>
                            <td className="px-6 py-4">
                                A
                            </td>
                            <td className="px-6 py-4">
                                <button type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Edit</button>
                                <button type='button' className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:text-white dark:border-gray-600 dark:hover:bg-red-700 dark:hover:border-gray-600 dark:focus:ring-red-900'>Delete</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="px-6 py-4">
                                Doe
                            </td>
                            <td className="px-6 py-4">
                                Matematika
                            </td>
                            <td className="px-6 py-4">
                                70
                            </td>
                            <td className="px-6 py-4">
                                B
                            </td>
                            <td className="px-6 py-4">
                                <button type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Edit</button>
                                <button type='button' className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Delete</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="px-6 py-4">
                                Frank
                            </td>
                            <td className="px-6 py-4">
                                Kalkulus
                            </td>
                            <td className="px-6 py-4">
                                60
                            </td>
                            <td className="px-6 py-4">
                                C
                            </td>
                            <td className="px-6 py-4">
                                <button type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Edit</button>
                                <button type='button' className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Delete</button>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                4
                            </th>
                            <td className="px-6 py-4">
                                Jason
                            </td>
                            <td className="px-6 py-4">
                                Basis Data
                            </td>
                            <td className="px-6 py-4">
                                90
                            </td>
                            <td className="px-6 py-4">
                                A
                            </td>
                            <td className="px-6 py-4">
                                <button type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Edit</button>
                                <button type='button' className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
    )
    
}

export default Tugas9

