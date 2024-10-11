import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Tugas10 = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score').then((res) => {setData([...res.data])}).catch((error) => {})
    },[]);

    // console.log(data);

    return(
        <>
            <div className="w-full flex inline-flex items-center justify-center overflow-x-auto">
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
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {data !== null && data.map((res, index) => {
                            function handleIndexScore(score){
                                if(score >= 80){
                                    return 'A';
                                }else if(score >= 70 && score < 80){
                                    return 'B';
                                }else if(score >= 60 && score < 70){
                                    return 'C';
                                }else if(score >= 50 && score < 60){
                                    return 'D';
                                }else if(score < 50){
                                    return 'E';
                                }
                            }
                        return(
                            <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {res.name}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {res.course}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {res.score}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {handleIndexScore(res.score)}
                                </td>
                                <td className="px-6 py-4">
                                    <button type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Edit</button>
                                    <button type='button' className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:text-white dark:border-gray-600 dark:hover:bg-red-700 dark:hover:border-gray-600 dark:focus:ring-red-900'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            </>
    )
}

export default Tugas10;