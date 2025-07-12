import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const collaborators = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkv7g4FLyf-JpjEPeTkJQYiZFRCtJHwLoRVQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRSSKWLe3SF1l25TaLEc4omlnc67ITssNgw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkv7g4FLyf-JpjEPeTkJQYiZFRCtJHwLoRVQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRSSKWLe3SF1l25TaLEc4omlnc67ITssNgw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkv7g4FLyf-JpjEPeTkJQYiZFRCtJHwLoRVQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRSSKWLe3SF1l25TaLEc4omlnc67ITssNgw&s",
]
export const CollaboratorsSection = () => {
    return (
        <div className="w-full container  mx-auto font-serif py-10 md:py-25">
            <h2 className="text-lg text-center my-10">NUESTROS COLABORADORES</h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={5}
                spaceBetween={20}
                // pagination={{ clickable: false }}
                // autoplay={{ delay: 5500 }}
                loop={true} // para colocar la transicion infinit
                breakpoints={{
                    320: { slidesPerView: 2.5 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                className=""
            >
                {collaborators.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full  object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};