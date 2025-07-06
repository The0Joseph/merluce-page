// import Banner from '../assets/img/BannerTienda.jpg'
import Banner from '../assets/img/banner-merluce.jpg'

export const HeroSection = () => {
    return (
        <div className="h-svh grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="font-serif md:pl-30 flex flex-col justify-center">
                <h1 className="text-7xl text-[#2D4A22] font-[100] leading-tight">
                    <span>Descubre</span> <br />
                    <span>Merluce</span>
                </h1>
                <p className="mt-6 text-lg text-[#2D4A22] mr-70 font-serif leading-loose ">Merluce es tu tienda de abarrotes de confianza, con mas de 10 años ofreciendo productos escenciales, atención amable y un servicio con valores como la responsabilidad y dedicación.</p>
                <div className='mt-10'>
                    <a href="#"  className='mt-8 px-15 py-4 bg-[#2D4A22] text-white rounded-full text-[14px] hover:bg-green-900 transition duration-300'>
                        Explorar
                    </a>
                </div>
            </div>
            <div>
                <img src={Banner} className='w-full h-200 object-cover object-bottom' alt="" />
            </div>

        </div>
    );
};
