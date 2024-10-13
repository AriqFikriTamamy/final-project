import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import EditData from './editData';

function GetData(){
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true) //Real Time Data

    useEffect(() => {
        if(fetchStatus === true){            
            axios.get('https://quiz-api-rho.vercel.app/api/mobile-apps').then((res) => {setData(res.data)}).catch((error) => {});
            setFetchStatus(false);
        }
    }, [fetchStatus])

    const handleDelete = (event) => {
        let idData = event.target.value;
        if(!idData){
            console.error("ID tidak ditemukan", idData);
            return;
        }
        axios.delete(`https://quiz-api-rho.vercel.app/api/mobile-apps/${idData}`)
        .then((res) => {
            console.log('Sukses hapus data:', res)
            setFetchStatus(true)
        }).catch((error) => {
            console.error('Gagal hapus data', error)
        })
    }

    const handleEdit  = (item) => {
        setEditData(item)
    }

    const handleSave = (updatedItem) => {
        const dataUpdated = data.map((item) => item._id === updatedItem._id ? updatedItem : item);
        setData(dataUpdated);
        setEditData(null);
    }

    return (
        <>
        {/* Data */}
        <h1 className='font-bold text-2xl my-10 mx-4'>Manage Data</h1>
            <div className="flex sm:flex inline-flex items-center justify-center overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mx-4">
                    <thead className="text-lg text-white bg-violet-900 dark:bg-gray-700 dark:text-white-400">
                        <tr key='table_head' className='text-center uppercase font-bold'>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Release Year
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Is_Android_App
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Is_Ios_App
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data != null && data.map((res, index) => {
                            const price = res.price === 0 ? 'Free' : `${res.price}`
                            return(
                                <tr key={res._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="text-center font-bold px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {res.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.rating}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.release_year}
                                    </td>
                                    <td className="px-6 py-4">
                                        {(res.size / 1000).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.is_android_app}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.is_ios_app}
                                    </td>
                                    <td className="px-6 py-4 flex">
                                        <button type='button' onClick={() => handleEdit(res)} className='text-white bg-yellow-400 border border-gray-300 focus:outline-none hover:bg-yellow-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' data-modal-target="crud-modal" data-modal-toggle="crud-modal">Edit</button>
                                        <button type='button' onClick={handleDelete} value={res._id}className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:text-white dark:border-gray-600 dark:hover:bg-red-700 dark:hover:border-gray-600 dark:focus:ring-red-900'>Delete</button>
                                    </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {editData && (
                <EditData editData={editData} setEditData={setEditData} onSave={handleSave}/>
            )}
        </>
    )
}

export default GetData;