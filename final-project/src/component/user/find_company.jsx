function FindCompany() {
    return (
        <>
            <div className="mt-10 mx-5">
                <h1 className="text-4xl font-bold">Cari perusahaan untuk Anda</h1>
                <p className="text-2xl font-bold text-gray-500">Jelajahi profil perusahaan agar Anda menemukan tempatyang tepat. Pelajari dan bandingkan berbagai benefit didalamnya.</p>
            </div>
            <div className="flex flex-row mt-5 mx-5 text-2xl font-bold">
                <div className="px-5 py-5 mr-5 rounded-lg outline outline-gray-500">
                    <img src="src/component/assets/sanbercode.png"></img>
                    <p>Sanbercode</p>
                </div>
                <div className="px-5 py-5 rounded-lg outline outline-gray-500">
                    <img src="src/component/assets/netflix.png" />
                    <p className="my-10">Netflix</p>
                </div>
            </div>
        </>
    )
}

export default FindCompany;