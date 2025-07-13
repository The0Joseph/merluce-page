import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTitle } from "./SectionTitle";

const productList = [
    {
        id: 1,
        name: 'Galletas Mini OREO',
        price: 3.10,
        image: 'https://www.oreo-la.com/images/release/products/Jea7pHdCXozWtQlRyLtADuo565rb9m11037SZMLK.png?v=ok'
    },
    {
        id: 2,
        name: 'Papa Lays',
        price: 1.50,
        image: 'https://aceleralastatic.nyc3.cdn.digitaloceanspaces.com/files/uploads/1499/1596226959-77-frito-lay-papas-lays-clasicas-70-jpg.jpg'
    },
    {
        id: 3,
        name: 'Galletas Rellenitas',
        price: 1.00,
        image: 'https://kyodai.com.pe/market/wp-content/uploads/2024/02/coronitas-chocolate.png'
    },
    {
        id: 4,
        name: 'Cerveza Pilsen Callao Six Pack Lata 355 ml',
        price: 39.90,
        image: 'https://tofuu.getjusto.com/orioneat-local/resized2/wZgncyQzKXYMdPtea-300-x.webp'
    },
    {
        id: 5,
        name: 'Leche Reconstituida Gloria Lata 390g',
        price: 4.50,
        image: 'https://wongfood.vtexassets.com/arquivos/ids/710467-1200-auto?v=638530275633370000&width=1200&height=auto&aspect=true'
    },
    {
        id: 6,
        name: 'Arroz Extra COSTEÑO Bolsa 750g',
        price: 13.90,
        image: 'https://plazavea.vteximg.com.br/arquivos/ids/27552446-1000-1000/433778.jpg?v=638313120991600000'
    },
    {
        id: 7,
        name: 'WAFER NIK FRESA X6UND X162GR',
        price: 4.50,
        image: 'https://candylandperu.com/wp-content/uploads/2023/02/42571752-zaUWzLVe.webp'
    },
    {
        id: 8,
        name: 'Alimento Húmedo para Perros DOG CHOW Cachorros Todos Los Tamaños con Carne 100gr',
        price: 3.90,
        image: 'https://plazavea.vteximg.com.br/arquivos/ids/28792488-1000-1000/20168405.jpg?v=638447042675170000'
    },
    {
        id: 9,
        name: 'Vino Tinto TABERNERO Borgoña Botella 750ml Paquete 2un',
        price: 21.90,
        image: 'https://plazavea.vteximg.com.br/arquivos/ids/31561438-1000-1000/20133848.jpg?v=638864586784770000'
    },
    {
        id: 10  ,
        name: 'Whisky JOHNNIE WALKER Red Label Botella 750ml',
        price: 45.90,
        image: 'https://plazavea.vteximg.com.br/arquivos/ids/28994025-1000-1000/160490.jpg?v=638490748894500000'
    },
]

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
                        {productList.map(({id, name, price, image}) => (
                            <SwiperSlide key={id}>
                                <div className="flex flex-col h-[320px] md:h-[370px] p-2 bg-white rounded-xl shadow-md">
                                    <img
                                        src={image}
                                        alt={`Slide ${id + 1}`}
                                        className="w-full h-30 md:h-64 object-cover rounded-xl shadow-md"
                                    />
                                    <p className="line-clamp-2 text-sm md:text-sm my-2">{name}</p>
                                    <p className="text-lg text-[#2D4A22] mt-1">S/ { price.toFixed(2) }</p>
                                    <div className="border  rounded-sm my-3 border-color-primary hover:bg-[#2D4A22] hover:text-white" >
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