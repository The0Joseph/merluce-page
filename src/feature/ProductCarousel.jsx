import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTitle } from "./SectionTitle";

const images = [
    "https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok",
    "https://aceleralastatic.nyc3.cdn.digitaloceanspaces.com/files/uploads/1499/1596226959-77-frito-lay-papas-lays-clasicas-70-jpg.jpg",
    "https://kyodai.com.pe/market/wp-content/uploads/2024/02/coronitas-chocolate.png",
    "https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok",
    "https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok",
    "https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok",
    "https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok",
    "https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok",
    "https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok",
];

export const ProductCarousel = () => {

    return (
        <div className= " mt-10 mb-25 md:h-svh w-full overflow-x-hidden flex justify-center items-center">
            <div className="w-full  px-4">
                <SectionTitle />
                <div className="w-full container  mx-auto font-serif ">
                    <h2 className="text-lg md:text-xl my-5">Los más vendidos</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={5}
                        spaceBetween={20}
                        navigation
                        // pagination={{ clickable: false }}
                        // autoplay={{ delay: 5500 }}
                        loop={false} // para colocar la transicion infinit
                        breakpoints={{
                            320: { slidesPerView: 2.5 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="max-w-full rounded-2xl overflow-hidden"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-30 md:h-64 object-cover rounded-xl shadow-md"
                                    />
                                    <div className="border rounded-sm my-3 border-color-primary hover:bg-[#2D4A22] hover:text-white" >
                                        <a href="#" className="text-center font-sans text-sm  p-2 block ">
                                            <p className="">Agregar al carrito</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};