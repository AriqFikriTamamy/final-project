function Footer() {
    return (
        <>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="w-full max-w-screen-xxl mx-auto p-4 md:py-8 flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between ">
                    <a href="/" className="flex justify-self-start mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="src/assets/Logo.png" className="h-8" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </a>
                </div>
                <div className="w-full justify-center items-center flex-col md:block md:w-auto">
                    <ul className="flex flex-row justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="text-gray-500 hover:underline me-4 md:me-6">Persyaratan & Ketentuan</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:underline me-4 md:me-6">Keamanan & Privacy</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:underline me-4 md:me-6">Hak CIpta &copy; 2024 Marikerja.</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:underline">Kontak</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;