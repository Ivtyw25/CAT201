import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Armenian, PenangHill, KekLokSi, BotanicalGardens, ChewJetty } from "../assets/images";


const Carousel = () => {

    const Images = [    
        Armenian,
        PenangHill,
        KekLokSi,
        BotanicalGardens, 
        ChewJetty
    ]
    return (
        <div className="bg-pale-brown rounded-xl w-full max-w-xl py-6 padding-x flex justify-center items-center">  {/* Container to control the carousel size */}
                <Swiper
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                >
                    {Images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col bg-pale-light-yellow gap-10 mb-6 group relative shadow-lg rounded-xl px-4 py-6 overflow-hidden">
                                <img
                                    src={item}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-48 max-xl:object-contain object-fill rounded-lg"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    )
}

export default Carousel
