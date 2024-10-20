// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';


function EditData({ editData, setEditData, onSave }) {
    const [formData, setFormData] = useState(
        {
            company_image_url: '',
            title: '',
            job_description: '',
            job_qualification: '',
            job_type: '',
            job_tenure: '',
            job_status: 0,
            company_name: '',
            company_city: '',
            salary_min: 0,
            salary_max: 0,
        }
    )

    useEffect(() => {
        if (editData) {
            setFormData(
                {
                    company_image_url: editData.company_image_url || '',
                    title: editData.title || '',
                    job_description: editData.job_description || '',
                    job_qualification: editData.job_qualification || '',
                    job_type: editData.job_type || '',
                    job_tenure: editData.job_tenure || '',
                    job_status: editData.job_status || 0,
                    company_name: editData.company_name || '',
                    company_city: editData.company_city || '',
                    salary_min: editData.salary_min || 0,
                    salary_max: editData.salary_max || 0,
                }
            )
        }
    }, [editData])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSaveInput = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`https://final-project-api-alpha.vercel.app/api/jobs/${editData._id}`, formData);
            onSave(response.data);
            setEditData(null);
            console.log('Data berhasil diperbarui');
        } catch (error) {
            console.error('Error update data:', error);
        }
    }

    const handleClose = () => {
        setEditData(null)
    }

    useEffect(() => {
        if (editData) {
            setFormData({
                company_image_url: editData.company_image_url || '',
                title: editData.title || '',
                job_description: editData.job_description || '',
                job_qualification: editData.job_qualification || '',
                job_type: editData.job_type || '',
                job_tenure: editData.job_tenure || '',
                job_status: editData.job_status || 0,
                company_name: editData.company_name || '',
                company_city: editData.company_city || '',
                salary_min: editData.salary_min || 0,
                salary_max: editData.salary_max || 0,
            });
        }
    }, [editData])

    if (!editData) {
        return null;
    }

    return (
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
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form className="flex flex-col justify-center max-w-3xl mx-auto p-4">
                            <div className="relative z-0 mb-5">
                                <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                                <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company Image</label>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="company_image_url" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Image URL</label>
                                <input type="url" onChange={handleInputChange} name='company_image_url' value={formData.company_image_url} id="image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                                <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Job Data</label>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="title" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" onChange={handleInputChange} name='title' value={formData.title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="job_description" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea type="text" onChange={handleInputChange} name='job_description' value={formData.job_description} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="job_qualification" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Qualification</label>
                                <input type="text" onChange={handleInputChange} name='job_qualification' value={formData.job_qualification} id="job_qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="job_type" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Type</label>
                                <input type="text" onChange={handleInputChange} name='job_type' value={formData.job_type} id="job_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="job_tenure" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Tenure</label>
                                <input type="text" onChange={handleInputChange} name='job_tenure' value={formData.job_tenure} id="job_tenure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="job_status" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Status</label>
                                <input type="number" min='0' max='1' onChange={handleInputChange} name='status' value={formData.job_status} id="job_status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="company_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Company Name</label>
                                <input type="text" onChange={handleInputChange} name='company_name' value={formData.company_name} id="company_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="company_city" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">City</label>
                                <input type="text" onChange={handleInputChange} name='company_city' value={formData.company_city} id="company_city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="relative z-0 mb-5">
                                <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                                <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Salary</label>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="salary_min" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Minimum Salary</label>
                                <input type="number" onChange={handleInputChange} name='salary_min' value={formData.salary_min} id="salary_min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="salary_max" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Maximum Salary</label>
                                <input type="number" onChange={handleInputChange} name='salary_max' value={formData.salary_max} id="salary_max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
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

EditData.propTypes = {
    editData: PropTypes.shape({
        company_image_url: PropTypes.string,
        title: PropTypes.string,
        job_description: PropTypes.string,
        job_qualification: PropTypes.string,
        job_type: PropTypes.string,
        job_tenure: PropTypes.string,
        job_status: PropTypes.number,
        company_name: PropTypes.string,
        company_city: PropTypes.string,
        salary_min: PropTypes.number,
        salary_max: PropTypes.number,
        _id: PropTypes.string.isRequired,
    }),
    setEditData: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default EditData;