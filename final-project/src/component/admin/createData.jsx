// import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateDataSidebar from './createData_sidebar';
import DashboardNavbar from './dashboard_navbar';
import Cookies from 'js-cookie';

function CreateData() {
    const [input, setInput] = useState(
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

    const [setData] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true) //Real Time Data

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get('https://final-project-api-alpha.vercel.app/api/jobs').then((res) => { setData([...res.data]) }).catch((error) => { console.log(error) });
            setFetchStatus(false);
        }
    }, [fetchStatus, setData, setFetchStatus])

    const handleInput = (event) => {
        // console.log(event.target);

        let name = event.target.name;
        let value = event.target.value;
        let type = event.target.type;
        let newValue = value;
        if (type === 'number') {
            newValue = value === '' ? '' : Number(value)
        }

        setInput((prevInput) => ({ ...prevInput, [name]: newValue }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        let { company_image_url, title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, salary_min, salary_max } = input;
        axios.post('https://final-project-api-alpha.vercel.app/api/jobs', { company_image_url, title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, salary_min, salary_max }).then((res) => {
            console.log(res); setFetchStatus(true); let { token } = res.data
            Cookies.set('token', token)
        })
    }
    return (
        <>
            <header>
                <DashboardNavbar />
            </header>
            <CreateDataSidebar />
            <h1 className='font-bold text-2xl mx-10 mt-24 text-center mb-5 uppercase'>Create Data</h1>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="relative z-0 mb-5">
                    <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                    <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company Image</label>
                </div>
                <div className="mb-5">
                    <label htmlFor="company_image_url" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Image URL</label>
                    <input type="url" onChange={handleInput} name='company_image_url' value={input.company_image_url} id="company_image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="relative z-0 mb-5">
                    <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                    <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Job Data</label>
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" onChange={handleInput} name='title' value={input.title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="job_description" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea type="text" onChange={handleInput} name='job_description' value={input.job_description} id="job_description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="job_qualification" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Qualification</label>
                    <input type="text" onChange={handleInput} name='job_qualification' value={input.job_qualification} id="job_qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="job_type" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Type</label>
                    <input type="text" onChange={handleInput} name='job_type' value={input.job_type} id="job_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="job_tenure" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Tenure</label>
                    <input type="text" onChange={handleInput} name='job_tenure' value={input.job_tenure} id="job_tenure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="job_status" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Status</label>
                    <input type="number" min='0' max='1' onChange={handleInput} name='job_status' value={input.job_status} id="job_status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="company_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Company</label>
                    <input type="text" onChange={handleInput} name='company_name' value={input.company_name} id="company_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="company_city" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">City</label>
                    <input type="text" onChange={handleInput} name='company_city' value={input.company_city} id="company_city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="relative z-0 mb-5">
                    <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                    <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Salary</label>
                </div>
                <div className="mb-5">
                    <label htmlFor="salary_min" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Minimum Salary</label>
                    <input type="number" onChange={handleInput} name='salary_min' value={input.salary_min} id="salary_min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="salary_max" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Maximum Salary</label>
                    <input type="number" onChange={handleInput} name='salary_max' value={input.salary_max} id="salary_max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type={'submit'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Data</button>
            </form>
        </>
    )
}

export default CreateData;