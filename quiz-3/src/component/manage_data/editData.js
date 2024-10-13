import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function EditData({editData, setEditData, onSave}){
    const [formData, setFormData] = useState(
        {
            image_url: '',
            name: '',
            category: '',
            description: '',
            price: '',
            rating: '',
            release_year: '',
            size: '',
            is_android_app: 0,
            is_ios_app: 0,
        }
    )

    useEffect(() => {
        if(editData){
            setFormData(
                {
                    image_url: editData.image_url || '',
                    name: editData.name || '',
                    category: editData.category || '',
                    description: editData.description || '',
                    price: editData.price || '',
                    rating: editData.rating || '',
                    release_year: editData.release_year || '',
                    size: editData.size || '',
                    is_android_app: editData.is_android_app || 0,
                    is_ios_app: editData.is_ios_app || 0,
                }
            )
        }
    }, [editData])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleSaveInput = (event) => {
        event.preventDefault();
        axios.put(`https://quiz-api-rho.vercel.app/api/mobile-apps/${editData._id}`, formData).then((res) => {
            onSave(res.data);
            setEditData(null);
            console.log('Data berhasil diperbarui');
        }).catch((error) => {
            console.error('Error update data:', error)
        })
    }

    const handleClose = () => {
        setEditData(null)
    }

    if(!editData){
        return null;
    }
    return(
            <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            <div id="crud-modal" tabIndex="-1" aria-hidden="true" data-modal-placement='center' className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full max-w-full">
                <div className="relative p-6 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Edit Data
                            </h3>
                            <button type="button" onClick={handleClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" aria-label="close-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form className="flex flex-col justify-center max-w-3xl mx-auto p-4">
                            <div className="relative z-0 mb-5">
                                <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                                <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Game Image</label>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="image_url" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Image URL</label>
                                <input type="url" onChange={handleInputChange} name='image_url' value={formData.image_url} id="image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                                <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Game Data</label>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" onChange={handleInputChange} name='name' value={formData.name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="category" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Category</label>
                                <input type="text" onChange={handleInputChange} name='category' value={formData.category} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="description" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea type="text" onChange={handleInputChange} name='description' value={formData.description} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="price" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" onChange={handleInputChange} name='price' value={formData.price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="rating" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Rating</label>
                                <input type="number" min='0' max='5' onChange={handleInputChange} name='rating' value={formData.rating} id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="release_year" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Release Year</label>
                                <input type="number" min='2009' onChange={handleInputChange} name='release_year' value={formData.release_year} id="release_year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="size" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Size</label>
                                <input type="number" onChange={handleInputChange} name='size' value={formData.size} id="size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                                <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Device</label>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="android" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Android ?</label>
                                <input type="number" min='0' max='1' onChange={handleInputChange} name='is_android_app' value={formData.is_android_app} id="android" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="ios" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">IOS ?</label>
                                <input type="number" min='0' max='1' onChange={handleInputChange} name='is_ios_app' value={formData.is_ios_app} id="ios" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            {/* <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div> */}
                            <div className="flex justify-between">
                                <button type='save' onClick={handleSaveInput} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
                                <button type='button' onClick={handleClose} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
            </>
    )
}

export default EditData;