import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CreateData(){
    const [input, setInput] = useState(
        {
            image_url: '',
            name: '',
            category: '',
            description: '',
            price: '',
            rating: '',
            release_year: '',
            size: '',
            is_android_app: '',
            is_ios_app: '',
        }
    )

    const [setData] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true) //Real Time Data

    useEffect(() => {
        if(fetchStatus === true){            
            axios.get('https://quiz-api-rho.vercel.app/api/mobile-apps').then((res) => {setData([...res.data])}).catch((error) => {});
            setFetchStatus(false);
        }
    }, [fetchStatus, setData, setFetchStatus])

    const handleInput = (event) => {
        // console.log(event.target);

        let name = event.target.name;
        let value = event.target.value;
        let type = event.target.type;
        let newValue = value;
        if(type === 'number'){
            newValue = value === '' ? '' : Number(value)
        }

        setInput((prevInput) => ({...prevInput, [name]: newValue}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        let {image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app} = input;
        axios.post('https://quiz-api-rho.vercel.app/api/mobile-apps', {image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app}).then((res) => {console.log(res); setFetchStatus(true)})
    }

    return(
        <>
            {/* Add Data */}
            <h1 className='font-bold text-2xl my-10 mx-4 text-md text-center'>Create Data</h1>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="relative z-0 mb-5">
                    <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                    <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Game Image</label>
                </div>
                <div className="mb-5">
                    <label htmlFor="image_url" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Image URL</label>
                    <input type="url" onChange={handleInput} name='image_url' value={input.image_url} id="image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="relative z-0 mb-5">
                    <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                    <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Game Data</label>
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" onChange={handleInput} name='name' value={input.name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="category" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Category</label>
                    <input type="text" onChange={handleInput} name='category' value={input.category} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea type="text" onChange={handleInput} name='description' value={input.description} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="price" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number" onChange={handleInput} name='price' value={input.price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="rating" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Rating</label>
                    <input type="number" min='0' max='5' onChange={handleInput} name='rating' value={input.rating} id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="release_year" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Release Year</label>
                    <input type="number" min='2009' onChange={handleInput} name='release_year' value={input.release_year} id="release_year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="size" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Size</label>
                    <input type="number" onChange={handleInput} name='size' value={input.size} id="size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="relative z-0 mb-5">
                    <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                    <label htmlFor="disabled_standard" className="absolute text-sm text-black-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Device</label>
                </div>
                <div className="mb-5">
                    <label htmlFor="android" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Android ?</label>
                    <input type="number" min='0' max='1' onChange={handleInput} name='is_android_app' value={input.is_android_app} id="android" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="ios" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">IOS ?</label>
                    <input type="number" min='0' max='1' onChange={handleInput} name='is_ios_app' value={input.is_ios_app} id="ios" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type={'submit'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Data</button>
            </form>
        </>
    )
}

export default CreateData;