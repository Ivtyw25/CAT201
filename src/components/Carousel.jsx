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
        <div className="bg-[#E0C19E] w-full xl:max-w-2xl max-lg:max-w-xl mx-auto py-6 padding-x flex justify-center items-center">  {/* Container to control the carousel size */}
            <Swiper

                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="rounded-lg overflow-hidden"
            >
                {Images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col bg-[#E7C8AE] gap-4 mb-6 group relative shadow-lg rounded-xl px-4 py-6 overflow-hidden">
                            <img
                                src={item}
                                alt={`Image ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
