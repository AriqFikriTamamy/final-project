function QuickFind() {
    return (
        <>
            <div className="mt-10 mx-5">
                <h1 className='text-4xl font-bold'>Pencarian Cepat</h1>
                <div className="flex flex-row mt-5">
                    <h2 className="text-xl font-bold mr-5">Kualifikasi</h2>
                    <a className="text-base text-black underline mx-5" href="#">HTML</a>
                    <a className="text-base text-black underline mx-5" href="#">CSS</a>
                    <a className="text-base text-black underline mx-5" href="#">Javascript</a>
                    <a className="text-base text-black underline mx-5" href="#">Java</a>
                    <a className="text-base text-black underline mx-5" href="#">Springboot</a>
                    <a className="text-base text-black underline mx-5" href="#">React</a>
                    <a className="text-base text-black underline mx-5" href="#">Next</a>
                </div>
                <div className="flex flex-row mt-5">
                    <h2 className="text-xl font-bold mr-14">Lokasi</h2>
                    <a className="text-base text-black underline mx-5" href="#">Jakarta</a>
                    <a className="text-base text-black underline mx-5" href="#">Seattle</a>
                </div>
                <div className="flex flex-row mt-5">
                    <h2 className="text-xl font-bold mr-3">Masa Kerja</h2>
                    <a className="text-base text-black underline mx-5" href="#">Kontrak</a>
                    <a className="text-base text-black underline mx-5" href="#">Freelance</a>
                </div>
            </div>
        </>
    )
}

export default QuickFind;