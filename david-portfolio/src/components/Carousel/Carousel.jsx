import {useState, useEffect} from "react"
import {ChevronLeft, ChevronRight } from "react-feather"
export default function Carousel({ children: slides,
    autoSlide = false,
    autoSlideInterval= 3000
 }) {

    const [curr,setCurr] = useState(0);

    const prev = () => 
        setCurr((curr) => (curr === 0 ? slides.length - 1: curr - 1))

    const next = () => 
        setCurr((curr) => (curr === slides.length - 1 ? 0: curr + 1 ))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    

    return(
        <div className="carousel-outer flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-4 w-full">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white 80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40} />
                </button>
                <div className="overflow-hidden relative w-full">
                    <div 
                        className="flex transition-transform ease-out duration-500"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                        {slides.map((slide, i) => (
                            <div className="w-full flex-shrink-0" key={i}>
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={next} className="p-1 rounded-full shadow bg-white 80 text-gray-800 hover:bg-white"> 
                    <ChevronRight size={40}/>
                </button>
            </div>
            <div className="carousel-dots-wrapper-static">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`carousel-dot transition-all w-3 h-3 rounded-full ${curr === i ? "carousel-dot-active" : "bg-white bg-opacity-50"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}