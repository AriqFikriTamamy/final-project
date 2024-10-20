import { useEffect, useState } from "react";
import EditData from './editData';
import axios from "axios";

function GetData() {
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true) //Real Time Data

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get('https://final-project-api-alpha.vercel.app/api/jobs').then((res) => { setData(res.data) }).catch((error) => { console.log(error) });
            setFetchStatus(false);
        }
    }, [fetchStatus])

    const handleDelete = (event) => {
        let idData = event.target.value;
        if (!idData) {
            console.error("ID tidak ditemukan", idData);
            return;
        }
        axios.delete(`https://final-project-api-alpha.vercel.app/api/jobs/${idData}`)
            .then((res) => {
                console.log('Sukses hapus data:', res)
                setFetchStatus(true)
            }).catch((error) => {
                console.error('Gagal hapus data', error)
            })
    }

    const handleEdit = (item) => {
        setEditData(item)
    }

    const handleSave = (updatedItem) => {
        const dataUpdated = data.map((item) => item._id === updatedItem._id ? updatedItem : item);
        setData(dataUpdated);
        setEditData(null);
    }
    return (
        <>
            <h1 className='font-bold text-2xl mx-10 mt-24 text-center mb-5 uppercase'>Manage Data</h1>
            <div className="flex inline-flex items-center justify-center overflow-x-auto shadow-md sm:rounded-lg sm:ml-64">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mx-10">
                    <thead className="text-lg text-white bg-redBg dark:bg-gray-700 dark:text-white-400">
                        <tr key='table_head' className='text-center uppercase font-bold'>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tenure
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Minimum Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Maximum Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data != null && data.map((res, index) => {
                            // const price = res.price === 0 ? 'Free' : `${res.price}`
                            return (
                                <tr key={res._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="text-center font-bold px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {res.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_qualification}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_type}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_tenure}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_status}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.company_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.company_city}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.salary_min}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.salary_max}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.createdAt}
                                    </td>
                                    <td className="px-6 py-4 flex">
                                        <button type='button' onClick={() => handleEdit(res)} className='text-white bg-yellow-400 border border-gray-300 focus:outline-none hover:bg-yellow-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' data-modal-target="crud-modal" data-modal-toggle="crud-modal">Edit</button>
                                        <button type='button' onClick={handleDelete} value={res._id} className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:text-white dark:border-gray-600 dark:hover:bg-red-700 dark:hover:border-gray-600 dark:focus:ring-red-900'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {editData && (
                <EditData editData={editData} setEditData={setEditData} onSave={handleSave} />
            )}
        </>
    )
}

export default GetData;