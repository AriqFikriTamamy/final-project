// import React from 'react';
import CarouselImage from "./user/carousel";
import FindJob from "./user/find_job";
import FindCompany from "./user/find_company";
import QuickAccessCard from "./user/quick_access_card";
import QuickFind from "./user/quick_find";
import Footer from "./user/footer";

function Homepage() {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex justify-self-start rtl:space-x-reverse">
                            <img src="src/assets/Logo.png" className="ml-5 flex justify-self-start h-8" alt="Marikerja Logo" />
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full justify-center items-center flex-col md:block md:w-auto" id="navbar-default">
                            <ul className="text-2xl font-medium flex flex-col justify-center items-center px-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className=" md:hover:text-red-700 block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-red md:dark:text-red-500" aria-current="page">Cari Kerja</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lihat Profil</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tips Karir</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cari Perusahaan</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <a href="/login">
                                <button type="button" className="mx-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Masuk</button>
                            </a>
                            <a href="/register">
                                <button type="button" className="mx-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Daftar</button>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <CarouselImage />
                <FindJob />
                <FindCompany />
                <QuickAccessCard />
                <QuickFind />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Homepage;