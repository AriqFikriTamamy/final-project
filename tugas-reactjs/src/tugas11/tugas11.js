import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function Tugas11(){
    const [data, setData] = useState(null);
    const [input, setInput] = useState(
        {
        name : "",
        course: "",
        score: "",
    }
)
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        axios.get('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score').then((res) => {setData([...res.data])}).catch((error) => {})
    },[]);

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        if(name === 'name'){
            setInput({...input, name: value})
        }else if(name === 'course'){
            setInput({...input, course: value})
        }else if(name === 'score'){
            setInput({...input, score: value})
        }
    }

    const [fetchStatus, setFetchStatus] = useState(true);
    useEffect(() => {
        if(fetchStatus === true){
            axios.get('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score')
            .then((res) => {
                setData([...res.data])
            }).catch((error) => {
            })
    
            setFetchStatus(false);
        }
    }, [fetchStatus, setData, setFetchStatus])

    const handleSubmit = (event) => {
        event.preventDefault();
        let {name, course, score} = input;
        axios.post('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score', {name, course, score})
        .then((res) => {
            console.log(res);
        })
    
        setInput({
            name: "",
            course: "",
            score: "",
        })
    }

    // Edit Data
    const handleEdit = (item) => {
        setEditData(item)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditData({...editData, [name]: value})
    }

    const handleSaveInput = () => {
        axios.put(`https://6678f9f40bd45250562081d9.mockapi.io/api/student-score/${editData.id}`, editData)
        .then((res) => {
            const dataUpdated = data.map((item) => {
                if(item.id === editData.id){
                    return editData
                }else {
                    return item;
                }
            })
            setData(dataUpdated);
            setEditData(null)
            console.log(res);
        }).catch((error) => {
            console.error('Error update data:', error)
        })
    }

    // Delete Data
    const handleDelete = (event) => {
        let idData = parseInt(event.target.value);

        axios.delete(`https://6678f9f40bd45250562081d9.mockapi.io/api/student-score/${idData}`)
        .then((res) => {
            setFetchStatus(true);
        })
    }
    return(
        <>
        {/* Tugas 10 */}
        <div className="w-full sm:flex inline-flex items-center justify-center overflow-x-auto">
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
                                    <button onClick={() => handleEdit(res)} type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Edit</button>
                                    <button onClick={handleDelete} value={res.id} type='button' className='text-white bg-red-700 border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:text-white dark:border-gray-600 dark:hover:bg-red-700 dark:hover:border-gray-600 dark:focus:ring-red-900'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            {/* Tugas 11 */}

            {/* Edit Data */}
            {editData && (
                <>
                <h1 className='font-bold flex items-center justify-center mb-5 uppercase'>Edit Data</h1>
                <div className='flex items-center justify-center'>
                    <br></br>
                    <br></br>
                    <div className='mr-5'>
                        <label className='font-bold'>Nama:</label>
                        <br></br>
                        <input onChange={handleInputChange} type='text' name='name' value={editData.name}></input>
                    </div>
                    <div className='mr-5'>
                        <label className='font-bold'>Mata Kuliah:</label>
                        <br></br>
                        <input onChange={handleInputChange} type='text' name='course' value={editData.course}></input>
                    </div>
                    <div className='mr-5'>
                        <label className='font-bold'>Nilai:</label>
                        <br></br>
                        <input onChange={handleInputChange} type='number' name='score' value={editData.score}></input>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <button onClick={handleSaveInput} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Simpan</button>
                    <button onClick={() => setEditData(null)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Batal</button>
                </div>
                </>
            )}

            {/* Add Data */}
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5 mt-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama: </label>
                    <input onChange={handleInput} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Peserta Didik" name='name' value={input.name} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata Kuliah: </label>
                    <input onChange={handleInput} type="text" id="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Mata Kuliah Peserta Didik' name='course' value={input.course} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai: </label>
                    <input onChange={handleInput} type="number" id="score" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min='0' max='100' placeholder='Nilai Peserta Didik' name='score' value={input.score} required />
                </div>
                <button type={'submit'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5">Tambah Data</button>
            </form>
        </>
    )
}

export default Tugas11;