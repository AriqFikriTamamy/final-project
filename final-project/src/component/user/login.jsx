import Footer from "./footer"

function LoginPage() {
    const handleAdminLogin = () => {
        console.log("Admin login button clicked!");
        window.location.href = '/login_admin';
    };

    const handleLogin = () => {
        console.log("Login clicked!");
        window.location.href = '/jobpage'
    }
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex justify-self-start rtl:space-x-reverse">
                            <img src="src/component/assets/Logo.png" className="ml-5 flex justify-self-start h-8" alt="Marikerja Logo" />
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            <main>
                <div className="flex items-center justify-center place-content-center mx-0 my-20">
                    <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <h5 className="text-4xl font-bold text-gray-900 dark:text-white">Masuk</h5>
                            <div className="">
                                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Alamat Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Masukkan Email" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Kata Sandi</label>
                                <input type="password" name="password" id="password" placeholder="Masukkan Kata Sandi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="mt-2.5 w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Ingat saya</label>
                                </div>
                                <a href="#" className="ms-auto text-lg text-black hover:text-black hover:underline dark:text-blue-500">Lupa kata sandi?</a>
                            </div>
                            <a href='/jobpage'>
                                <button type="button" onClick={handleLogin} className="mt-5 w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Masuk</button>
                            </a>
                            <div className="flex items-center my-4">
                                <div className="w-full border-gray-300">
                                    <hr></hr>
                                </div>
                                <div className="px-3 text-gray-500">
                                    <span>atau</span>
                                </div>
                                <div className="w-full border-gray-300">
                                    <hr></hr>
                                </div>
                            </div>
                            <button type="button" className="flex items-center justify-center w-full border border-black text-black text-lg font-medium rounded-lg px-4 py-2.5 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300">
                                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.35 11.1H20.5V11H12V13.5H17.74C17.01 15.61 14.73 17 12 17C8.69 17 6 14.31 6 11C6 7.69 8.69 5 12 5C13.45 5 14.75 5.56 15.71 6.46L17.71 4.46C16.19 3.04 14.19 2.25 12 2.25C6.9 2.25 2.75 6.4 2.75 11.5C2.75 16.6 6.9 20.75 12 20.75C16.9 20.75 21 16.9 21 12C21 11.59 21.35 11.1 21.35 11.1Z" fill="#4285F4" />
                                    <path d="M3.65 7.13L6.22 9.19C7.09 6.86 9.33 5.25 12 5.25C13.45 5.25 14.75 5.81 15.71 6.71L17.71 4.71C16.19 3.29 14.19 2.5 12 2.5C8.13 2.5 4.78 4.98 3.65 7.13Z" fill="#34A853" />
                                    <path d="M12 20.5C14.6 20.5 16.86 19.38 18.35 17.65L15.89 15.9C14.96 16.64 13.74 17.06 12 17.06C9.31 17.06 7.02 15.68 6.27 13.66L3.64 15.86C4.77 18.04 8.13 20.5 12 20.5Z" fill="#FBBC05" />
                                    <path d="M20.65 11.1H20V11H12V13.5H17.5C17.04 14.67 16.15 15.56 15.01 16.04L17.69 18.64C19.88 16.79 20.75 13.73 20.75 12C20.75 11.59 20.65 11.1 20.65 11.1Z" fill="#EA4335" />
                                </svg>
                                Lanjutkan dengan Google
                            </button>
                            <button type="button" className="flex items-center justify-center w-full border border-black text-black text-lg font-medium rounded-lg px-4 py-2.5 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                </svg>
                                Lanjutkan dengan Facebook
                            </button>
                            <button type="button" className="flex items-center justify-center w-full border border-black text-black text-lg font-medium rounded-lg px-4 py-2.5 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300">
                                <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                Lanjutkan dengan Apple
                            </button>

                            <div className="text-lg font-medium text-black dark:text-gray-300">
                                Tidak punya akun? <a href="/register" className="text-black hover:text-black hover:underline dark:text-blue-500">Daftar</a>
                            </div>

                        </form>
                        <div className="flex items-center my-4">
                            <div className="w-full border-gray-300">
                                <hr></hr>
                            </div>
                            <div className="px-3 text-gray-500">
                                <span>Admin</span>
                            </div>
                            <div className="w-full border-gray-300">
                                <hr></hr>
                            </div>
                        </div>
                        <a href="/login_admin">
                            <button type="button" onClick={handleAdminLogin} className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Masuk untuk Admin</button>
                        </a>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default LoginPage