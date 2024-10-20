function QuickAccessCard() {
    return (
        <>
            <div className="flex items-center justify-center gap-6 my-10 mx-5">
                <div className="relative">
                    <img src="src/component/assets/Tips Card.png" alt="Tips Card" className="w-full h-auto" />
                    {/* <button type="button" className="absolute inset-0 m-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" style={{ width: '120px', height: '50px' }}>Tips Karir</button> */}
                    <a href="#" className="bg-white absolute top-0 mt-60 ml-20 px-5 py-2 rounded text-black">
                        <span>Tips Karir</span>
                    </a>
                </div>
                <div className="relative">
                    <img src="src/component/assets/Find Company Card.png" alt="Find Company Card" />
                    {/* <button type="button" className="focus:outline-none text-white bg-pink-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button> */}
                    <a href="#" className="bg-pink-500 absolute top-0 mt-60 ml-20 px-5 py-2 rounded text-white">
                        <span>Cari Perusahaan</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default QuickAccessCard;