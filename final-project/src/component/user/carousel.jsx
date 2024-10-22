import { useEffect, useState } from 'react'
// import { Carousel } from "flowbite";

function CarouselImage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { src: 'src/assets/Carousel.png', alt: 'Image 1' },
        { src: 'src/assets/Carousel2.png', alt: 'Image 2' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, 5000);

        return () => clearInterval(interval)
    }, [items.length])

    function showItem(index) {
        setActiveIndex(index)
    }

    function nextItem() {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
    }

    function prevItem() {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    }
    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {items.map((item, index) => (
                        <div key={index} className={`duration-700 ease-in-out ${activeIndex === index ? '' : 'hidden'}`} data-carousel-item>
                            <img src={item.src} className="w-full absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pb-10" alt={item.alt} />
                            {/* <!-- Slider indicators --> */}
                            <div className="absolute bottom-0 md:top-56 lg:top-60 xl:top-68 xl:mt-5 2xl:mt-16 left-1/2 z-30 flex -translate-x-1/2 left-1/2 space-x-3" >
                                {
                                    items.map((_, i) => (
                                        <button type='button' key={i} className={`w-3 h-3 rounded-full ${activeIndex === i ? 'bg-red' : 'bg-red-500'}`} aria-current={activeIndex === i} aria-label={`Slide ${i + 1}`} onClick={() => showItem(i)} data-carousel-slide-to={i}></button>
                                    ))
                                }
                            </div>
                        </div>
                    ))}

                    <button type="button" onClick={prevItem} className="mr-5 bg-red-500 absolute left-0 top-1/2 z-30 flex items-center justify-center px-4 -translate-y-1/2 cursor-pointer group focus:outline-none" data-carousel-prev >
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/50 hover:bg-red-700/50 dark:bg-red-800/30 group-hover:bg-red/50 dark:group-hover:bg-red-800/60 group-focus:ring-4 group-focus:ring-red dark:group-focus:ring-red-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-red dark:text-red-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" onClick={nextItem} className="bg-red-500 absolute right-0 top-1/2 z-30 flex items-center justify-center px-4 -translate-y-1/2 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/50 hover:bg-red-700/50 bg-white/30 dark:bg-gray-800/30 group-hover:bg-red/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div >
        </>
    )
}

export default CarouselImage;