function FindJob() {
    return (
        <>
            <div className="bg-redBg h-40 w-full mt-5">
                <form>
                    <div className="flex flex-row items-center justify-center gap-6">
                        <div className="mt-5">
                            <label htmlFor="first_name" className="block mb-2 text-lg text-white font-bold text-gray-900 dark:text-white">Pekerjaan</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pekerjaan" required />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="last_name" className="block mb-2 text-lg text-white font-bold text-gray-900 dark:text-white">Lokasi</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lokasi" required />
                        </div>
                        <button type="submit" className="mt-16 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-10 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cari</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FindJob;